# 🔍 Explain the Difference Between `any`, `unknown`, and `never` Types in TypeScript

TypeScript has various powerful types to write the code in more safe and maintainable way.  
In this blog, I will discuss about TypeScript's `any`, `unknown`, and `never` type 👇

---

## 1️⃣ `any`

In TypeScript, the `any` type means declaring the variable without writing the data type of it.

- It allows a variable to hold any data type value.
- It disables TypeScript’s type checking. And increase the possibility to do runtime error.
- It is one kind of going back to JS environment by telling the compiler that developer knows what is he doing.
- Don't have to do any checks before performing operations on values of type `any`.

```
let value: any = 5;
value = "hello";        // no error
value.toUpperCase();    // no error
value = true;
```

✔️ *As it reduces the type safety, it’s better to avoid it. Or developer can use it if he is 100% sure of his work.*

---

## 2️⃣ `unknown`

In TypeScript, the `unknown` type represents a value that could be anything, just like `any`.  
But it **cannot** be used directly without checking the type first. It requires **type narrowing** before usage.

```
let value: unknown = "hello";
// value.toUpperCase(); // Error. Cannot use before type checking.

if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe
}
```

✔️ *It is safe to use `unknown` when expecting any type but still want type safety.*

---

## 3️⃣ `never`

In TypeScript, the `never` type represents values that **never occur**.  
It is typically used for functions that throw errors or never return.

```
function throwError(): never {
  throw new Error("Something went wrong!");
}

function infiniteLoop(): never {
  while (true) {}
}
```

✔️ *It is not used for regular variables.*

---


---
# 🎯 What is the Use of Enums in TypeScript?

In TypeScript, an "enumeration" (abbreviated as enum) is a powerful feature that allows developers to define a set of named constants. This enhances code readability, organization, and type safety, especially when working with sets of related values.

---

## 📝 Use of Enums

✅ Improves code readability and maintainability.  
✅ Prevents hardcoded strings or numbers throughout the code.  
✅ Offers type safety with meaningful names.  
✅ Works well in switch cases and conditional checks.

---

## 1️⃣ `Numeric Enums`

Numeric enums assign auto-incremented numbers by default, starting from 0 (unless a custom starting value is provided).

```
enum Direction {
  North,   // 0
  East,    // 1
  South,   // 2
  West     // 3
}

let dir: Direction = Direction.South;
console.log(dir); // Output: 2
```

---

## 2️⃣ `String Enums`

String enums explicitly assign string values to each member, offering more flexibility and clarity.

```
enum Days {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY"
}

let today: Days = Days.Thursday;
console.log(today); // Output: "THURSDAY"
```

