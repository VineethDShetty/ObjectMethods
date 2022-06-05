# Object Methods NPM Package

Object Methods Package for different methods that can be used for Objects


## Installation 

```
npm install objectmethods
```

```
yarn add objectmethods
```

## Importing the Package

```
const ObjectMethods=require("objectmethods")
```

## Usage

### Length of the Object
```
let a=ObjectMethods.len(object) // Returns the Length of the Object 

```
### Finding the Keys ,Values and Entries of a Object

```
let a=ObjectMethods.keys(object) // Returns keys in the object in an array
let b=ObjectMethods.values(object) // Return Values in the object in an array
let c=ObjectMethods.entries(object) // Returns [Keys,values] in a object in an array

```


### Adding a Key - Value in random position 

```
let a=ObjectMethods.push(object,key,value,pos)  // Pushes the key-value in entered position 

```


### Removing a Key - value from a Random Position 

```
let a=ObjectMethods.pop(object,pos)

```


### Sorting the Object 

```
let a=ObjectMethods.sortkeys(object,order) // order is 'a' for ascending and 'd' for descending

```





