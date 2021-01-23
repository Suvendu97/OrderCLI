
const program = require('commander');
const { prompt } = require('inquirer');
const {
  addOrder,
  findOrder,
} = require('./index');

// Order Questions
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Customer Name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Customer Phone Number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer Email Address'
  },
  {
    type: 'input',
    name: 'value',
    message: 'Order Value'
  },
  {
    type: 'input',
    name: 'item',
    message: 'Item Ordered'
  },
  {
    type: 'input',
    name: 'deliveryDate',
    message: 'expected delivery Date'
  },
];

program 
  .version('1.0.0')
  .description('Order Management System')


// Add Command
program
  .command('add')
  .alias('a')
  .description('Add a Order')
  .action(() => {
    prompt(questions).then(answers => addOrder(answers));
  });

// Find Command
program
  .command('find <name>')
  .alias('f')
  .description('Find a Order')
  .action(name => findOrder(name));

program.parse(process.argv);