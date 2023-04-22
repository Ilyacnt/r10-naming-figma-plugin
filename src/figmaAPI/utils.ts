export const sortFramesTopToBottom = (frames: FrameNode[]) => {
  // @ts-ignore
  return frames.sort((a, b) => {
    if (a.x < b.x) return -1;
    if (a.x > b.x) return 1;

    if (a.y < b.y) return -1;
    if (a.y > b.y) return 1;
  });
};

export const sortFramesLeftToRight = (frames: FrameNode[]) => {
  // @ts-ignore
  return frames.sort((a, b) => {
    if (a.y < b.y) return -1;
    if (a.y > b.y) return 1;

    if (a.x < b.x) return -1;
    if (a.x > b.x) return 1;
  });
};

export const generateCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    code += chars[randomIndex];
  }
  return code;
};
