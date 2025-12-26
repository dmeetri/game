process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", (key) => {
  if (key === "\u0003") {
    console.log("\n🚪 Выход из программы");
    process.exit();
  }

  if (key === "\r") {
    console.log("[Enter]");
    return;
  }

  if (key === " ") {
    console.log("[Пробел]");
    return;
  }

  if (key === "\u001b") {
    console.log("[Escape]");
    return;
  }

  if (key.charCodeAt(0) === 27) {
    process.stdin.once("data", (rest) => {
      const fullKey = key + rest;
      if (fullKey === "\u001b[A") console.log("[Стрелка вверх]");
      else if (fullKey === "\u001b[B") console.log("[Стрелка вниз]");
      else if (fullKey === "\u001b[C") console.log("[Стрелка вправо]");
      else if (fullKey === "\u001b[D") console.log("[Стрелка влево]");
      else console.log(`[Спецклавиша: ${JSON.stringify(fullKey)}]`);
    });
    return;
  }

  console.log(`Нажато: "${key}" (код: ${key.charCodeAt(0)})`);
});
