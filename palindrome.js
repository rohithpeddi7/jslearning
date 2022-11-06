function is_palindrome() {
  let s = process.argv[2],
    check = true,
    n = s.length;
  for (let i = 0; i < n / 2; i++) {
    if (s[i] != s[n - 1 - i]) check = false;
  }
  if (check) console.log(s + " is a palindrome!");
  else console.log(s + " is not a palindrome!");
}

is_palindrome();
