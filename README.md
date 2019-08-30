## Shopping Cart Application
This project is developed to calculate the total price for products in shopping cart. 

### Prerequites

- Node 11.x
- NPM 6.x

### Setup 
- clone the repository
- Install dependencies `yarn install`
- Save JSON file into `/data` folder

### How it works  
To see the help of this application, run `node index -h`, you will see the options for this application as below
```$xslt
Usage: index [options]

Shopping Cart Calculation Tool

Options:
  -V, --version           output the version number
  -d --debug              show debug information
  -c --cart [file name]   name of cart json file (default: "")
  -p --price [file name]  name of base price json file (default: "")
  -h, --help              output usage information

```

To run the application, pass two file names as arguments and run command below
```$xslt
node index -c <cart-file-name> -p <base-prices-file-name>
```

if you want to print debug info, add option for debug
```$xslt
node index -d -c <cart-file-name> -p <base-prices-file-name>
```

### How to test
Test cases are located at `/tests` folder, run test by using command below 
```$xslt
yarn run test
```

