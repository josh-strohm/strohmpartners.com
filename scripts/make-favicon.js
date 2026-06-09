const sharp = require("sharp");
const path = require("path");

const src = path.join(__dirname, "..", "public", "strohmpartners-logo-nobg.png");
const out = path.join(__dirname, "..", "src", "app", "icon.png");

(async () => {
  const meta = await sharp(src).metadata();
  const W = meta.width;
  const H = meta.height;

  const cropSize = Math.min(W, Math.round(H * 0.65));
  const left = Math.max(0, Math.round((W - cropSize) / 2));
  const top = Math.round(H * 0.02);

  await sharp(src)
    .extract({ left, top, width: cropSize, height: cropSize })
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(out);

  console.log("Wrote favicon:", out, "crop", { left, top, size: cropSize });
})();
