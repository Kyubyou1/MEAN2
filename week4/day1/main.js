
function personMaker(name, items) {
  return {
    name,
    items,
    take(item, target) {
      if (!target || !Array.isArray(target.items)) {
        throw new Error('target must have an items array');
      }

      for (const [index, element] of target.items.entries()) {
        if (element === item) {
          this.items.push(item);
          target.items.splice(index, 1);
          return true;
        }
      }
      return false;
    }
  }
}

const jason = personMaker('Jason', ['gum', 'wallet', 'pencil']);
const brian = personMaker('Brian', ['gold', 'rubies', 'silver']);
const keith = personMaker('Keith', ['lint', 'rocks', 'candy']);

const boundFunction = jason.take.bind(keith, 'gold');
console.log(boundFunction);

console.log(boundFunction(brian));
console.log(jason.items)
console.log(brian.items)
console.log(keith.items)


function binder(func, context) {
  const passedArguments = Array.prototype.slice.call(arguments, 2);
  console.log(passedArguments);

  return function(...args) {
    args = passedArguments.concat(args);
    return func.apply(context, args);

    // context.__temp = func;
    //
    // const result = context.__temp(...args);
    //
    // delete context.__temp;
    //
    // return result;
  };
}

const bound = binder(jason.take, keith, 'rubies');

console.log('stealing rubies', bound(brian));

Function.prototype.binder = function(context) {
  const args = Array.prototype.slice.call(arguments, 1);
  const func = this;
  console.log('in our bind');
  return function(...rest) {
    return func.apply(context, args.concat(rest));
  };
};

const bound2 = jason.take.binder(keith, 'gold');

console.log(bound2(brian));
console.log(Function.prototype.binder);

console.log(jason.items)
console.log(brian.items)
console.log(keith.items)
