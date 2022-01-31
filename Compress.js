export default class Compress {
    static fromString(text) {
        const bin = this.toBinary(text).split(' ');
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

        return outJSON;
    }

    static toBinary(text) {
        return text.split('').map(function (char) {
            return char.charCodeAt(0).toString(2);
        }).join(' ');
    }
}