if (false) {} else {console.log('false is falsy');}
if (null) {} else {console.log('null is falsy');}
if (undefined) {} else {console.log('undefined is falsy');}
if (0) {} else {console.log('0 is falsy');}
if (NaN) {} else {console.log('NaN is falsy');}
if ('') {} else {console.log('empty string with single quotes is falsy');}
if ("") {} else {console.log('empty string with double quotes is falsy');}

//Everything else is truthy

if (true)           {console.log('true is truthy'); }
if ({})             {console.log('an empty object is truthy'); }
if ([])             {console.log('an empty array is truthy'); }

if ('bob')          {console.log('a non-empty string is truthy'); }
if (new RegExp())   {console.log('a new instance of an object is truthy'); }

if (10)             {console.log('positive integers is truthy'); }
if (-10)            {console.log('negative integers is truthy'); }
if (1.23)           {console.log('positive floats is truthy'); }
if (-1.23)          {console.log('negative floats is truthy'); }
if (Infinity)       {console.log('positive infinity is truthy'); }
if (-Infinity)      {console.log('negative infinity is truthy'); }

let a= Infinity;
console.log( a.valueOf());
