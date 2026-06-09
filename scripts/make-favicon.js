const sharp = require("sharp");
const path = require("path");

const src = path.join(__dirname, "..", "public", "test-favicon.png");
const out = path.join(__dirname, "..", "src", "app", "icon.png");

(async () => {
  const meta = await sharp(src).metadata();
  const W = meta.width;
  const H = meta.height;

  const left = 428;
  const top = 80;
  const cropWidth = 520;
  const cropHeight = 520;

  await sharp(src)
    .extract({ left, top, width: cropWidth, height: cropHeight })
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(out);

  console.log("Wrote favicon:", out, "crop", { left, top, width: cropWidth, height: cropHeight });
})();
