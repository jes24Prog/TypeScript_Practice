## 🧩 10+ Practice Problems by Category (With Clear Instructions)

### Strings (12)

1. **Reverse a string**
   - Write a function `reverse(s: string): string` that returns the input string reversed.
   - _Example_: `reverse("hello") → "olleh"`
2. **Check for palindrome**
   - Write `isPalindrome(s: string): boolean` to determine if `s` reads the same backwards (ignore case and non-alphanumeric).
   - _Example_: `isPalindrome("A man, a plan") → true`
3. **Convert to camelCase**
   - Write `toCamelCase(s: string): string` that transforms `"hello world_test"` into `"helloWorldTest"`.
4. **Count vowels & consonants**
   - Write `countLetters(s: string): { vowels: number; consonants: number }`.
   - _Example_: `countLetters("TypeScript!") → { vowels: 3, consonants: 6 }`
5. **Find & replace substrings**
   - Implement `replaceAll(s: string, find: string, replaceWith: string): string` without using built-in `replaceAll`.
6. **Validate email format**
   - Write `isValidEmail(email: string): boolean` using a regular expression to enforce `local@domain.tld`.
7. **Run-length encoding**
   - Implement `compress(s: string): string` that encodes `"aaabbc"` as `"a3b2c1"`.
8. **Anagram check**
   - Write `areAnagrams(a: string, b: string): boolean` to test if two strings contain the same letters (ignore spaces & case).
9. **Extract numbers**
   - Write `extractNumbers(s: string): number[]` that returns all sequences of digits in `s` as integers.
   - _Example_: `extractNumbers("a1b23") → [1, 23]`
10. **Reformat date strings**
    - Create `reformatDate(date: string): string` converting `"2025-07-04"` to `"07/04/2025"`.
11. **Count word frequency**
    - Write `wordFrequency(s: string): Record<string, number>` splitting on whitespace/punctuation.
12. **Capitalize every word**
    - Implement `titleCase(s: string): string` so `"hello world"` becomes `"Hello World"`.

---

### Arrays (12)

1. **Sort numbers**
   - Write `sortNumbers(nums: number[], asc?: boolean): number[]` to sort ascending (default) or descending.
2. **Remove duplicates**
   - Implement `unique<T>(arr: T[]): T[]` returning a deduplicated array preserving original order.
3. **Most frequent element**
   - Write `mostFrequent<T>(arr: T[]): T | null` returning the element with highest occurrence.
4. **Merge two sorted arrays**
   - Implement `mergeSorted(a: number[], b: number[]): number[]` in O(n) time.
5. **Rotate array**
   - Create `rotate<T>(arr: T[], k: number): T[]` shifting elements right by `k` (wrap around).
6. **Flatten nested arrays**
   - Write `flatten<T>(arr: (T | T[])[]): T[]` to one level deep.
7. **Array intersection**
   - Implement `intersection<T>(a: T[], b: T[]): T[]`.
8. **Partition by predicate**
   - Create `partition<T>(arr: T[], fn: (item: T) => boolean): [T[], T[]]`.
9. **All subarrays**
   - Write `subarrays<T>(arr: T[]): T[][]` returning all contiguous subarrays.
10. **Implement map/filter/reduce**
    - Create `myMap`, `myFilter`, and `myReduce` functions matching standard signatures for arrays.
11. **Chunk an array**
    - Implement `chunk<T>(arr: T[], size: number): T[][]`.
12. **Find Kth largest**
    - Write `kthLargest(nums: number[], k: number): number | null` without full sort if possible.

---

### Objects (12)

1. **Deep clone**
   - Implement `deepClone<T>(obj: T): T` handling nested objects/arrays.
2. **Merge without overwrite**
   - Write `mergeSafe<T, U>(a: T, b: U): T & U` where existing keys in `a` aren’t overwritten by `b`.
3. **Object to entries array**
   - Create `entries<T>(obj: Record<string, T>): [string, T][]`.
4. **Invert keys & values**
   - Write `invert(obj: Record<string, string>): Record<string, string>`.
5. **Pick properties**
   - Implement `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`.
6. **Omit properties**
   - Create `omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>`.
7. **Shallow equality**
   - Write `shallowEqual(a: object, b: object): boolean`.
8. **Typed proxy logger**
   - Use `Proxy` to log each property read/write on an object with proper TypeScript types.
9. **Object to query string**
   - Implement `toQueryString(params: Record<string, string | number>): string`.
10. **Validate against interface**
    - Given an interface, write `validate<T>(obj: any, keys: (keyof T)[]): obj is T`.
11. **Rename keys**
    - Write `renameKeys<T>(obj: T, map: Record<string, string>): any` returning a new object.
12. **Filter object by value**
    - Implement `filterByValue<T>(obj: Record<string, T>, fn: (v: T) => boolean): Record<string, T>`.

---

### Functions (12)

1. **Debounce**
   - Create `debounce<F extends (...args: any[]) => any>(fn: F, ms: number): F`.
2. **Throttle**
   - Implement `throttle<F extends (...args: any[]) => any>(fn: F, ms: number): F`.
3. **Curry**
   - Write `curry<F extends (...args: any[]) => any>(fn: F): any`.
4. **Compose**
   - Implement `compose(...fns: Function[]): Function` applying right-to-left.
5. **Function overloading**
   - Write overloaded `add(a: number, b: number): number` and `add(a: string, b: string): string`.
6. **Delay promise**
   - Create `delay(ms: number): Promise<void>`.
7. **Recursive factorial**
   - Implement `factorial(n: number): number` recursively.
8. **Memoization**
   - Write `memoize<F extends (...args: any[]) => any>(fn: F): F`.
9. **Type-safe event emitter**
   - Create a class `EventEmitter<Events>` where `Events` maps event names to payload types.
10. **Once**
    - Implement `once<F extends (...args: any[]) => any>(fn: F): F` so `fn` runs only on first call.
11. **Retry async**
    - Write `retry<F extends (...args: any[]) => Promise<any>>(fn: F, attempts: number): F`.
12. **Pipe**
    - Implement `pipe<T>(value: T, ...fns: Array<(arg: T) => T>): T`.

---
