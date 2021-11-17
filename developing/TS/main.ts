await (async function main() {
  //@ts-ignore ─ Unnecessary error.
  await import ("./addButtons.js");

  //@ts-ignore ─ Unnecessary error.
  await import ("./canvas.js");
})();

export {};