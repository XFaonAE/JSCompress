import Compress from "./Compress";

const compressed = Compress.fromString("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
console.log(compressed);

const raw = Compress.fromCompressed(compressed);
console.log(raw);
