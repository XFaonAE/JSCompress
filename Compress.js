export default class Compress {
    static fromString(text) {
        const bin = text.split(" ");
        let outJSON = [];

        bin.forEach(chunk => {
            let bits = chunk.split('');

            let lastBit = "";
            let resJSON = [];
            let resIndex = -1;

            bits.forEach(bit => {
                if (lastBit == bit) {
                    resJSON[resIndex].count++;
                } else {
                    resJSON.push({
                        char: bit,
                        count: 1
                    });

                    resIndex++;
                }
                
                lastBit = bit;
            });

            outJSON.push(resJSON);
        });

        return JSON.stringify(outJSON);
    }

    static fromCompressed(compressed) {
        compressed = JSON.parse(compressed);
        let packets = [];

        compressed.forEach(chunk => {
            let packet = "";

            chunk.forEach(bit => {
                packet += bit.char.repeat(bit.count);
            });

            packets.push(packet);
        });

        return packets.join(" ");
    }

    static toBinary(text) {
        return text.split('').map(function (char) {
            return char.charCodeAt(0).toString(2);
        }).join(' ');
    }
}