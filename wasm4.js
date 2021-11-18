const WIDTH = 160;
const HEIGHT = 160;
const COLORS = [
    14743759,
    8831084,
    3172432,
    464929, 
];
const ADDR_DRAW_COLORS = 20;
const ADDR_FRAMEBUFFER = 160;
const BUTTON_X = 1;
const BUTTON_Z = 2;
const BUTTON_LEFT = 16;
const BUTTON_RIGHT = 32;
const BUTTON_UP = 64;
const BUTTON_DOWN = 128;
const FONT = Uint8Array.of(255, 255, 255, 255, 255, 255, 255, 255, 199, 199, 199, 207, 207, 255, 207, 255, 147, 147, 147, 255, 255, 255, 255, 255, 147, 1, 147, 147, 147, 1, 147, 255, 239, 131, 47, 131, 233, 3, 239, 255, 157, 91, 55, 239, 217, 181, 115, 255, 143, 39, 39, 143, 37, 51, 129, 255, 207, 207, 207, 255, 255, 255, 255, 255, 243, 231, 207, 207, 207, 231, 243, 255, 159, 207, 231, 231, 231, 207, 159, 255, 255, 147, 199, 1, 199, 147, 255, 255, 255, 231, 231, 129, 231, 231, 255, 255, 255, 255, 255, 255, 255, 207, 207, 159, 255, 255, 255, 129, 255, 255, 255, 255, 255, 255, 255, 255, 255, 207, 207, 255, 253, 251, 247, 239, 223, 191, 127, 255, 199, 179, 57, 57, 57, 155, 199, 255, 231, 199, 231, 231, 231, 231, 129, 255, 131, 57, 241, 195, 135, 31, 1, 255, 129, 243, 231, 195, 249, 57, 131, 255, 227, 195, 147, 51, 1, 243, 243, 255, 3, 63, 3, 249, 249, 57, 131, 255, 195, 159, 63, 3, 57, 57, 131, 255, 1, 57, 243, 231, 207, 207, 207, 255, 135, 59, 27, 135, 97, 121, 131, 255, 131, 57, 57, 129, 249, 243, 135, 255, 255, 207, 207, 255, 207, 207, 255, 255, 255, 207, 207, 255, 207, 207, 159, 255, 243, 231, 207, 159, 207, 231, 243, 255, 255, 255, 1, 255, 1, 255, 255, 255, 159, 207, 231, 243, 231, 207, 159, 255, 131, 1, 57, 243, 199, 255, 199, 255, 131, 125, 69, 85, 65, 127, 131, 255, 199, 147, 57, 57, 1, 57, 57, 255, 3, 57, 57, 3, 57, 57, 3, 255, 195, 153, 63, 63, 63, 153, 195, 255, 7, 51, 57, 57, 57, 51, 7, 255, 1, 63, 63, 3, 63, 63, 1, 255, 1, 63, 63, 3, 63, 63, 63, 255, 193, 159, 63, 49, 57, 153, 193, 255, 57, 57, 57, 1, 57, 57, 57, 255, 129, 231, 231, 231, 231, 231, 129, 255, 249, 249, 249, 249, 249, 57, 131, 255, 57, 51, 39, 15, 7, 35, 49, 255, 159, 159, 159, 159, 159, 159, 129, 255, 57, 17, 1, 1, 41, 57, 57, 255, 57, 25, 9, 1, 33, 49, 57, 255, 131, 57, 57, 57, 57, 57, 131, 255, 3, 57, 57, 57, 3, 63, 63, 255, 131, 57, 57, 57, 33, 51, 133, 255, 3, 57, 57, 49, 7, 35, 49, 255, 135, 51, 63, 131, 249, 57, 131, 255, 129, 231, 231, 231, 231, 231, 231, 255, 57, 57, 57, 57, 57, 57, 131, 255, 57, 57, 57, 17, 131, 199, 239, 255, 57, 57, 41, 1, 1, 17, 57, 255, 57, 17, 131, 199, 131, 17, 57, 255, 153, 153, 153, 195, 231, 231, 231, 255, 1, 241, 227, 199, 143, 31, 1, 255, 195, 207, 207, 207, 207, 207, 195, 255, 127, 191, 223, 239, 247, 251, 253, 255, 135, 231, 231, 231, 231, 231, 135, 255, 199, 147, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 1, 239, 247, 255, 255, 255, 255, 255, 255, 255, 255, 131, 249, 129, 57, 129, 255, 63, 63, 3, 57, 57, 57, 131, 255, 255, 255, 129, 63, 63, 63, 129, 255, 249, 249, 129, 57, 57, 57, 129, 255, 255, 255, 131, 57, 1, 63, 131, 255, 241, 231, 129, 231, 231, 231, 231, 255, 255, 255, 129, 57, 57, 129, 249, 131, 63, 63, 3, 57, 57, 57, 57, 255, 231, 255, 199, 231, 231, 231, 129, 255, 243, 255, 227, 243, 243, 243, 243, 135, 63, 63, 49, 3, 7, 35, 49, 255, 199, 231, 231, 231, 231, 231, 129, 255, 255, 255, 3, 73, 73, 73, 73, 255, 255, 255, 3, 57, 57, 57, 57, 255, 255, 255, 131, 57, 57, 57, 131, 255, 255, 255, 3, 57, 57, 3, 63, 63, 255, 255, 129, 57, 57, 129, 249, 249, 255, 255, 145, 143, 159, 159, 159, 255, 255, 255, 131, 63, 131, 249, 3, 255, 231, 231, 129, 231, 231, 231, 231, 255, 255, 255, 57, 57, 57, 57, 129, 255, 255, 255, 153, 153, 153, 195, 231, 255, 255, 255, 73, 73, 73, 73, 129, 255, 255, 255, 57, 1, 199, 1, 57, 255, 255, 255, 57, 57, 57, 129, 249, 131, 255, 255, 1, 227, 199, 143, 1, 255, 243, 231, 231, 207, 231, 231, 243, 255, 231, 231, 231, 231, 231, 231, 231, 255, 159, 207, 207, 231, 207, 207, 159, 255, 255, 255, 143, 69, 227, 255, 255, 255, 255, 255, 255, 255, 255, 147, 147, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 231, 255, 231, 231, 199, 199, 199, 255, 239, 131, 41, 47, 41, 131, 239, 255, 195, 153, 159, 3, 159, 159, 1, 255, 255, 165, 219, 219, 219, 165, 255, 255, 153, 153, 195, 129, 231, 129, 231, 255, 231, 231, 231, 255, 231, 231, 231, 255, 195, 153, 135, 219, 225, 153, 195, 255, 147, 255, 255, 255, 255, 255, 255, 255, 195, 189, 102, 94, 94, 102, 189, 195, 135, 195, 147, 195, 255, 255, 255, 255, 255, 201, 147, 39, 147, 201, 255, 255, 255, 255, 129, 249, 249, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 195, 189, 70, 90, 70, 90, 189, 195, 131, 255, 255, 255, 255, 255, 255, 255, 239, 215, 239, 255, 255, 255, 255, 255, 231, 231, 129, 231, 231, 255, 129, 255, 199, 243, 231, 195, 255, 255, 255, 255, 195, 231, 243, 199, 255, 255, 255, 255, 247, 239, 255, 255, 255, 255, 255, 255, 255, 255, 51, 51, 51, 51, 9, 63, 193, 149, 181, 149, 193, 245, 245, 255, 255, 255, 255, 207, 207, 255, 255, 255, 255, 255, 255, 255, 255, 255, 247, 207, 231, 199, 231, 195, 255, 255, 255, 255, 199, 147, 147, 199, 255, 255, 255, 255, 255, 39, 147, 201, 147, 39, 255, 255, 189, 59, 183, 173, 217, 177, 125, 255, 189, 59, 183, 169, 221, 187, 113, 255, 29, 187, 215, 45, 217, 177, 125, 255, 199, 255, 199, 159, 57, 1, 131, 255, 223, 239, 199, 147, 57, 1, 57, 255, 247, 239, 199, 147, 57, 1, 57, 255, 199, 147, 199, 147, 57, 1, 57, 255, 203, 167, 199, 147, 57, 1, 57, 255, 147, 255, 199, 147, 57, 1, 57, 255, 239, 215, 199, 147, 57, 1, 57, 255, 193, 135, 39, 33, 7, 39, 33, 255, 195, 153, 63, 63, 153, 195, 247, 207, 223, 239, 1, 63, 3, 63, 1, 255, 247, 239, 1, 63, 3, 63, 1, 255, 199, 147, 1, 63, 3, 63, 1, 255, 147, 255, 1, 63, 3, 63, 1, 255, 239, 247, 129, 231, 231, 231, 129, 255, 247, 239, 129, 231, 231, 231, 129, 255, 231, 195, 129, 231, 231, 231, 129, 255, 153, 255, 129, 231, 231, 231, 129, 255, 135, 147, 153, 9, 153, 147, 135, 255, 203, 167, 25, 9, 1, 33, 49, 255, 223, 239, 131, 57, 57, 57, 131, 255, 247, 239, 131, 57, 57, 57, 131, 255, 199, 147, 131, 57, 57, 57, 131, 255, 203, 167, 131, 57, 57, 57, 131, 255, 147, 255, 131, 57, 57, 57, 131, 255, 255, 187, 215, 239, 215, 187, 255, 255, 131, 57, 49, 41, 25, 57, 131, 255, 223, 239, 57, 57, 57, 57, 131, 255, 247, 239, 57, 57, 57, 57, 131, 255, 199, 147, 255, 57, 57, 57, 131, 255, 147, 255, 57, 57, 57, 57, 131, 255, 247, 239, 153, 153, 195, 231, 231, 255, 63, 3, 57, 57, 57, 3, 63, 255, 195, 153, 153, 147, 153, 137, 147, 255, 223, 239, 131, 249, 129, 57, 129, 255, 247, 239, 131, 249, 129, 57, 129, 255, 199, 147, 131, 249, 129, 57, 129, 255, 203, 167, 131, 249, 129, 57, 129, 255, 147, 255, 131, 249, 129, 57, 129, 255, 239, 215, 131, 249, 129, 57, 129, 255, 255, 255, 131, 233, 129, 47, 131, 255, 255, 255, 129, 63, 63, 129, 247, 207, 223, 239, 131, 57, 1, 63, 131, 255, 247, 239, 131, 57, 1, 63, 131, 255, 199, 147, 131, 57, 1, 63, 131, 255, 147, 255, 131, 57, 1, 63, 131, 255, 223, 239, 255, 199, 231, 231, 129, 255, 247, 239, 255, 199, 231, 231, 129, 255, 199, 147, 255, 199, 231, 231, 129, 255, 147, 255, 199, 231, 231, 231, 129, 255, 155, 135, 103, 131, 57, 57, 131, 255, 203, 167, 3, 57, 57, 57, 57, 255, 223, 239, 131, 57, 57, 57, 131, 255, 247, 239, 131, 57, 57, 57, 131, 255, 199, 147, 131, 57, 57, 57, 131, 255, 203, 167, 131, 57, 57, 57, 131, 255, 147, 255, 131, 57, 57, 57, 131, 255, 255, 231, 255, 129, 255, 231, 255, 255, 255, 255, 131, 49, 41, 25, 131, 255, 223, 239, 57, 57, 57, 57, 129, 255, 247, 239, 57, 57, 57, 57, 129, 255, 199, 147, 255, 57, 57, 57, 129, 255, 147, 255, 57, 57, 57, 57, 129, 255, 247, 239, 57, 57, 57, 129, 249, 131, 63, 63, 3, 57, 57, 3, 63, 63, 147, 255, 57, 57, 57, 129, 249, 131);
const ENCODER = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("");
const DECODER = [
    0,
    68,
    0,
    84,
    83,
    82,
    72,
    0,
    75,
    76,
    70,
    65,
    0,
    63,
    62,
    69,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    64,
    0,
    73,
    66,
    74,
    71,
    81,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    77,
    0,
    78,
    67,
    0,
    0,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    79,
    0,
    80,
    0,
    0
];
function encode(src) {
    const size = src.length;
    const extra = size % 4;
    const paddedSize = extra ? size + 4 - extra : size;
    let str = "", byte_nbr = 0, value = 0;
    while(byte_nbr < paddedSize){
        const b = byte_nbr < size ? src[byte_nbr] : 0;
        ++byte_nbr;
        value = value * 256 + b;
        if (byte_nbr % 4 == 0) {
            let divisor = 85 * 85 * 85 * 85;
            while(divisor >= 1){
                const idx = Math.floor(value / divisor) % 85;
                str += ENCODER[idx];
                divisor /= 85;
            }
            value = 0;
        }
    }
    return str;
}
function decode(string, dest) {
    let byte_nbr = 0, char_nbr = 0, string_len = string.length, dest_len = dest.length, value = 0;
    if (string.length % 5 == 0) {
        while(char_nbr < string_len){
            let idx = string.charCodeAt(char_nbr++) - 32;
            if (idx < 0 || idx >= DECODER.length) {
                return byte_nbr;
            }
            value = value * 85 + DECODER[idx];
            if (char_nbr % 5 == 0) {
                let divisor = 256 * 256 * 256;
                while(divisor >= 1){
                    if (byte_nbr >= dest_len) {
                        return byte_nbr;
                    }
                    dest[byte_nbr++] = value / divisor % 256;
                    divisor /= 256;
                }
                value = 0;
            }
        }
    }
    return byte_nbr;
}
class APU {
    constructor(){
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.ctx = ctx;
        this.nodes = new Array(4);
        function createDutyCycle(pulseWidth) {
            const real = new Float32Array(2048);
            for(let ii = 1; ii < 2048; ii++){
                real[ii] = 4 / (ii * Math.PI) * Math.sin(Math.PI * ii * pulseWidth);
            }
            return ctx.createPeriodicWave(real, new Float32Array(2048));
        }
        const duty25 = createDutyCycle(0.25);
        this.pulseDutyCycles = [
            createDutyCycle(0.125),
            duty25,
            createDutyCycle(0.5),
            duty25
        ];
        const noiseBuffer = ctx.createBuffer(1, 32768, ctx.sampleRate);
        const noiseData = noiseBuffer.getChannelData(0);
        let seed = 1;
        for(let ii = 0; ii < 32768; ++ii){
            const bit0 = seed & 1;
            seed >>= 1;
            const bit1 = seed & 1;
            const feedback = bit0 ^ bit1;
            seed |= feedback << 14;
            noiseData[ii] = feedback;
        }
        this.noiseBuffer = noiseBuffer;
    }
    tone(frequency, duration, volume, flags) {
        const freq1 = frequency & 65535;
        const freq2 = frequency >> 16 & 65535;
        const sustain = (duration & 255) / 60;
        const release = (duration >> 8 & 255) / 60;
        const decay = (duration >> 16 & 255) / 60;
        const attack = (duration >> 24 & 255) / 60;
        const channel = flags & 3;
        const mode = flags >> 2 & 3;
        const ctx1 = this.ctx;
        const attackTime = ctx1.currentTime + attack;
        const decayTime = attackTime + decay;
        const sustainTime = decayTime + sustain;
        const releaseTime = sustainTime + release;
        let peakLevel = 1;
        let sustainLevel = volume / 100;
        if (channel == 0 || channel == 1) {
            peakLevel *= 0.5;
            sustainLevel *= 0.5;
        }
        const gain = ctx1.createGain();
        const gainValue = gain.gain;
        gainValue.setValueAtTime(0, 0);
        gainValue.linearRampToValueAtTime(peakLevel, attackTime);
        gainValue.linearRampToValueAtTime(sustainLevel, decayTime);
        gainValue.linearRampToValueAtTime(sustainLevel, sustainTime);
        gainValue.linearRampToValueAtTime(0, releaseTime);
        let node;
        if (channel == 3) {
            node = ctx1.createBufferSource();
            node.buffer = this.noiseBuffer;
            node.loop = true;
            const pbrValue = node.playbackRate;
            pbrValue.setValueAtTime(freq1 * freq1 / 1000000, 0);
            if (freq2) {
                pbrValue.linearRampToValueAtTime(freq2 * freq2 / 1000000, releaseTime);
            }
        } else {
            node = ctx1.createOscillator();
            if (channel == 2) {
                node.type = "triangle";
            } else {
                const wave = this.pulseDutyCycles[mode];
                node.setPeriodicWave(wave);
            }
            const freqValue = node.frequency;
            freqValue.setValueAtTime(freq1, 0);
            if (freq2) {
                freqValue.linearRampToValueAtTime(freq2, releaseTime);
            }
        }
        const existingNode = this.nodes[channel];
        if (existingNode != null) {
            existingNode.stop(0);
        }
        this.nodes[channel] = node;
        node.start(0);
        node.stop(releaseTime);
        node.connect(gain);
        gain.connect(ctx1.destination);
    }
}
class Framebuffer {
    constructor(memory){
        this.bytes = new Uint8Array(memory, ADDR_FRAMEBUFFER, WIDTH * HEIGHT >>> 2);
        this.drawColors = new Uint16Array(memory, ADDR_DRAW_COLORS, 1);
    }
    clear() {
        this.bytes.fill(0);
    }
    drawPoint(color, x, y) {
        const idx = 160 * y + x >>> 2;
        const shift = (x & 3) << 1;
        const mask = 3 << shift;
        this.bytes[idx] = color << shift | this.bytes[idx] & ~mask;
    }
    drawPointUnclipped(color, x, y) {
        if (x >= 0 && x < 160 && y >= 0 && y < 160) {
            this.drawPoint(color, x, y);
        }
    }
    drawHLineFast(color, startX, y, endX) {
        const fillEnd = endX - (endX & 3);
        const fillStart = Math.min(startX + 3 & ~3, fillEnd);
        if (fillEnd - fillStart > 3) {
            for(let xx = startX; xx < fillStart; xx++){
                this.drawPoint(color, xx, y);
            }
            const from = 160 * y + fillStart >>> 2;
            const to = 160 * y + fillEnd >>> 2;
            const fillColor = color * 85;
            this.bytes.fill(fillColor, from, to);
            startX = fillEnd;
        }
        for(let xx = startX; xx < endX; xx++){
            this.drawPoint(color, xx, y);
        }
    }
    drawHLineUnclipped(color, startX, y, endX) {
        if (y >= 0 && y < 160) {
            if (startX < 0) {
                startX = 0;
            }
            if (endX > 160) {
                endX = WIDTH;
            }
            if (startX < endX) {
                this.drawHLineFast(color, startX, y, endX);
            }
        }
    }
    drawHLine(x, y, len) {
        const dc0 = this.drawColors[0] & 15;
        if (dc0 == 0) {
            return;
        }
        const strokeColor = dc0 - 1 & 3;
        this.drawHLineUnclipped(strokeColor, x, y, x + len);
    }
    drawVLine(x, y, len) {
        if (y + len <= 0 || x < 0 || x >= 160) {
            return;
        }
        const dc0 = this.drawColors[0] & 15;
        if (dc0 == 0) {
            return;
        }
        const startY = Math.max(0, y);
        const endY = Math.min(160, y + len);
        const strokeColor = dc0 - 1 & 3;
        for(let yy = startY; yy < endY; yy++){
            this.drawPoint(strokeColor, x, yy);
        }
    }
    drawRect(x, y, width, height) {
        const startX = Math.max(0, x);
        const startY = Math.max(0, y);
        const endXUnclamped = x + width;
        const endYUnclamped = y + height;
        const endX = Math.min(endXUnclamped, 160);
        const endY = Math.min(endYUnclamped, 160);
        const drawColors = this.drawColors[0];
        const dc0 = drawColors & 15;
        const dc1 = drawColors >>> 4 & 15;
        const offset = +(dc1 !== 0);
        if (dc0 !== 0) {
            const fillColor = dc0 - 1 & 3;
            for(let yy = startY + offset; yy < endY - offset; ++yy){
                this.drawHLineFast(fillColor, startX + offset, yy, endX - offset);
            }
        }
        if (dc1 !== 0) {
            const strokeColor = dc1 - 1 & 3;
            if (x >= 0 && x < 160) {
                for(let yy = startY; yy < endY - 1; ++yy){
                    this.drawPoint(strokeColor, x, yy);
                }
            }
            if (endX > 0 && endXUnclamped < 160 + 1) {
                for(let yy = startY; yy < endY - 1; ++yy){
                    this.drawPoint(strokeColor, endX - 1, yy);
                }
            }
            this.drawHLineFast(strokeColor, startX, startY, endX);
            this.drawHLineFast(strokeColor, startX, endY - 1, endX);
        }
    }
    drawOval(x, y, width, height) {
        const drawColors = this.drawColors[0];
        const dc0 = drawColors & 15;
        const dc1 = drawColors >>> 4 & 15;
        if (dc1 === 15) {
            return;
        }
        const strokeColor = dc1 - 1 & 3;
        const fillColor = dc0 - 1 & 3;
        const a = width >>> 1;
        const b = height >>> 1;
        if (a <= 0) return;
        if (b <= 0) return;
        const x0 = x + a, y0 = y + b;
        const aa2 = a * a * 2, bb2 = b * b * 2;
        {
            let x = a, y = 0;
            let dx = (1 - 2 * a) * b * b, dy = a * a;
            let sx = bb2 * a, sy = 0;
            let e = 0;
            while(sx >= sy){
                this.drawPointUnclipped(strokeColor, x0 + x, y0 + y);
                this.drawPointUnclipped(strokeColor, x0 + x, y0 - y);
                this.drawPointUnclipped(strokeColor, x0 - x, y0 + y);
                this.drawPointUnclipped(strokeColor, x0 - x, y0 - y);
                if (dc0 !== 0) {
                    const start = x0 - x + 1;
                    const end = x0 + x;
                    this.drawHLineFast(fillColor, start, y0 + y, end);
                    this.drawHLineFast(fillColor, start, y0 - y, end);
                }
                y++;
                sy += aa2;
                e += dy;
                dy += aa2;
                if (2 * e + dx > 0) {
                    x--;
                    sx -= bb2;
                    e += dx;
                    dx += bb2;
                }
            }
        }
        {
            let x = 0, y = b;
            let dx = b * b, dy = (1 - 2 * b) * a * a;
            let sx = 0, sy = aa2 * b;
            let e = 0;
            let ddx = 0;
            while(sy >= sx){
                this.drawPointUnclipped(strokeColor, x0 + x, y0 + y);
                this.drawPointUnclipped(strokeColor, x0 + x, y0 - y);
                this.drawPointUnclipped(strokeColor, x0 - x, y0 + y);
                this.drawPointUnclipped(strokeColor, x0 - x, y0 - y);
                x++;
                sx += bb2;
                e += dx;
                dx += bb2;
                ddx++;
                if (2 * e + dy > 0) {
                    if (dc0 !== 0) {
                        const w = x - ddx - 1;
                        const start = x0 - w;
                        const end = x0 + w + 1;
                        this.drawHLineUnclipped(fillColor, start, y0 + y, end);
                        this.drawHLineUnclipped(fillColor, start, y0 - y, end);
                    }
                    y--;
                    sy -= aa2;
                    e += dy;
                    dy += aa2;
                    ddx = 0;
                }
            }
        }
    }
    drawLine(x1, y1, x2, y2) {
        const drawColors = this.drawColors[0];
        const dc0 = drawColors & 15;
        if (dc0 === 0) {
            return;
        }
        const strokeColor = dc0 - 1 & 3;
        if (y1 > y2) {
            let swap = x1;
            x1 = x2;
            x2 = swap;
            swap = y1;
            y1 = y2;
            y2 = swap;
        }
        const dx = Math.abs(x2 - x1), sx = x1 < x2 ? 1 : -1;
        const dy = y2 - y1;
        let err = (dx > dy ? dx : -dy) / 2, e2;
        for(;;){
            this.drawPointUnclipped(strokeColor, x1, y1);
            if (x1 === x2 && y1 === y2) {
                break;
            }
            e2 = err;
            if (e2 > -dx) {
                err -= dy;
                x1 += sx;
            }
            if (e2 < dy) {
                err += dx;
                y1++;
            }
        }
    }
    drawText(charArray, x, y) {
        let currentX = x;
        for(let ii1 = 0, len = charArray.length; ii1 < len; ++ii1){
            const charCode = charArray[ii1];
            switch(charCode){
                case 0:
                    return;
                case 10:
                    y += 8;
                    currentX = x;
                    break;
                default:
                    this.blit(FONT, currentX, y, 8, 8, 0, charCode - 32 << 3, 8);
                    currentX += 8;
                    break;
            }
        }
    }
    blit(sprite, dstX, dstY, width, height, srcX, srcY, srcStride, bpp2 = false, flipX = false, flipY = false, rotate = false) {
        const clipXMin = Math.max(0, dstX) - dstX;
        const clipYMin = Math.max(0, dstY) - dstY;
        const clipXMax = Math.min(width, 160 - dstX);
        const clipYMax = Math.min(height, 160 - dstY);
        const drawColors = this.drawColors[0];
        if (rotate) {
            flipX = !flipX;
        }
        for(let row = clipYMin; row < clipYMax; ++row){
            for(let col = clipXMin; col < clipXMax; ++col){
                let sx, sy;
                if (rotate) {
                    sx = row;
                    sy = col;
                } else {
                    sx = col;
                    sy = row;
                }
                if (flipX) {
                    sx = clipXMax - sx - 1;
                }
                if (flipY) {
                    sy = clipYMax - sy - 1;
                }
                let colorIdx;
                const x = srcX + sx, y = srcY + sy;
                if (bpp2) {
                    const __byte = sprite[y * srcStride + x >>> 2];
                    const shift = 6 - ((x & 3) << 1);
                    colorIdx = __byte >>> shift & 3;
                } else {
                    const __byte = sprite[y * srcStride + x >>> 3];
                    const shift = 7 - (x & 7);
                    colorIdx = __byte >>> shift & 1;
                }
                const dc = drawColors >>> (colorIdx << 2) & 15;
                if (dc !== 0) {
                    this.drawPoint(dc - 1 & 3, dstX + col, dstY + row);
                }
            }
        }
    }
}
const PALETTE_SIZE = 4;
class WebGLCompositor {
    constructor(gl){
        this.gl = gl;
        this.colorBuffer = new Uint32Array(WIDTH * HEIGHT >> 2);
        this.paletteBuffer = new Float32Array(3 * PALETTE_SIZE);
        this.lastPalette = Array(PALETTE_SIZE);
        const table = new Uint32Array(256);
        for(let ii1 = 0; ii1 < 256; ++ii1){
            const xx = ii1 >> 6 & 3;
            const yy = ii1 >> 4 & 3;
            const zz = ii1 >> 2 & 3;
            const ww = ii1 & 3;
            table[ii1] = xx << 30 | yy << 22 | zz << 14 | ww << 6;
        }
        this.table = table;
        function createShader(type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (true) {
                if (gl.getShaderParameter(shader, 35713) == 0) {
                    throw new Error(gl.getShaderInfoLog(shader));
                }
            }
            return shader;
        }
        function createTexture(slot) {
            const texture = gl.createTexture();
            gl.activeTexture(slot);
            gl.bindTexture(3553, texture);
            gl.texParameteri(3553, 10242, 33071);
            gl.texParameteri(3553, 10243, 33071);
            gl.texParameteri(3553, 10240, 9728);
            gl.texParameteri(3553, 10241, 9728);
        }
        const vertexShader = createShader(35633, `
            attribute vec2 pos;
            varying vec2 framebufferCoord;
            void main () {
                framebufferCoord = pos*vec2(0.5, -0.5) + 0.5;
                gl_Position = vec4(pos, 0, 1);
            }
        `);
        const lookupBlock = Array.from({
            length: 4 - 1
        }, (_, i)=>{
            return `p = mix(p, palette[${i + 1}],  step(${((i + 1) / 4).toFixed(2)}, index));`;
        }).join('\n');
        const fragmentShader = createShader(35632, `
            precision mediump float;
            uniform vec3 palette[${4}];
            uniform sampler2D framebuffer;
            varying vec2 framebufferCoord;
            vec3 lookup(float index) {
                vec3 p = palette[0];
                ${lookupBlock}
                return p;
            }
            void main () {
                gl_FragColor = vec4(lookup(texture2D(framebuffer, framebufferCoord).r), 1.);
            }
        `);
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (true) {
            if (gl.getProgramParameter(program, 35714) == 0) {
                throw new Error(gl.getProgramInfoLog(program));
            }
        }
        gl.useProgram(program);
        this.paletteLocation = gl.getUniformLocation(program, "palette");
        gl.uniform1i(gl.getUniformLocation(program, "framebuffer"), 0);
        gl.detachShader(program, vertexShader);
        gl.deleteShader(vertexShader);
        gl.detachShader(program, fragmentShader);
        gl.deleteShader(fragmentShader);
        createTexture(33984);
        gl.texImage2D(3553, 0, 6409, 160, 160, 0, 6409, 5121, null);
        const positionAttrib = gl.getAttribLocation(program, "pos");
        const positionBuffer = gl.createBuffer();
        const positionData = new Float32Array([
            -1,
            -1,
            -1,
            +1,
            +1,
            +1,
            +1,
            +1,
            +1,
            -1,
            -1,
            -1, 
        ]);
        gl.bindBuffer(34962, positionBuffer);
        gl.bufferData(34962, positionData, 35044);
        gl.enableVertexAttribArray(positionAttrib);
        gl.vertexAttribPointer(positionAttrib, 2, 5126, false, 0, 0);
    }
    composite(palette, framebuffer) {
        const gl1 = this.gl;
        const bytes = framebuffer.bytes, colorBuffer = this.colorBuffer, table1 = this.table, lastPalette = this.lastPalette, rgb = this.paletteBuffer;
        let syncPalette = false;
        for(let ii2 = 0, n = 0; ii2 < 4; ++ii2){
            const argb = palette[ii2];
            syncPalette = syncPalette || lastPalette[ii2] !== argb;
            rgb[n++] = (argb >> 16 & 255) / 255;
            rgb[n++] = (argb >> 8 & 255) / 255;
            rgb[n++] = (argb & 255) / 255;
            lastPalette[ii2] = argb;
        }
        if (syncPalette) {
            gl1.uniform3fv(this.paletteLocation, this.paletteBuffer);
        }
        for(let ii3 = 0; ii3 < 160 * 160 >> 2; ++ii3){
            colorBuffer[ii3] = table1[bytes[ii3]];
        }
        gl1.texImage2D(3553, 0, 6409, 160, 160, 0, 6409, 5121, new Uint8Array(colorBuffer.buffer));
        gl1.drawArrays(4, 0, 6);
    }
}
class Runtime {
    constructor(){
        const canvas = document.createElement("canvas");
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        this.canvas = canvas;
        const gl1 = canvas.getContext("webgl", {
            alpha: false,
            depth: false,
            antialias: false
        });
        this.compositor = new WebGLCompositor(gl1);
        this.apu = new APU();
        this.memory = new WebAssembly.Memory({
            initial: 1,
            maximum: 1
        });
        this.data = new DataView(this.memory.buffer);
        this.framebuffer = new Framebuffer(this.memory.buffer);
        this.reset();
        this.paused = false;
    }
    setMouse(x, y, buttons) {
        this.data.setInt16(26, x, true);
        this.data.setInt16(28, y, true);
        this.data.setUint8(30, buttons);
    }
    setGamepad(idx, buttons) {
        this.data.setUint8(22 + idx, buttons);
    }
    getGamepad(idx) {
        return this.data.getUint8(22 + idx);
    }
    getSystemFlag(mask) {
        return this.data.getUint8(31) & mask;
    }
    maskGamepad(idx, mask, down) {
        const addr = 22 + idx;
        let buttons = this.data.getUint8(addr);
        if (down) {
            buttons |= mask;
        } else {
            buttons &= ~mask;
        }
        this.data.setUint8(addr, buttons);
    }
    unlockAudio() {
        const ctx1 = this.apu.ctx;
        if (ctx1.state == "suspended") {
            ctx1.resume();
        }
    }
    reset(zeroMemory) {
        const mem32 = new Uint32Array(this.memory.buffer);
        if (zeroMemory) {
            mem32.fill(0);
        }
        mem32.set(COLORS, 4 >> 2);
        this.data.setUint16(20, 4611, true);
        this.data.setInt16(26, 32767, true);
        this.data.setInt16(28, 32767, true);
    }
    async load(wasmBuffer) {
        const env = {
            memory: this.memory,
            rect: this.framebuffer.drawRect.bind(this.framebuffer),
            oval: this.framebuffer.drawOval.bind(this.framebuffer),
            line: this.framebuffer.drawLine.bind(this.framebuffer),
            hline: this.framebuffer.drawHLine.bind(this.framebuffer),
            vline: this.framebuffer.drawVLine.bind(this.framebuffer),
            text: this.text.bind(this),
            textUtf8: this.textUtf8.bind(this),
            textUtf16: this.textUtf16.bind(this),
            blit: this.blit.bind(this),
            blitSub: this.blitSub.bind(this),
            tone: this.apu.tone.bind(this.apu),
            diskr: this.diskr.bind(this),
            diskw: this.diskw.bind(this),
            trace: this.trace.bind(this),
            traceUtf8: this.traceUtf8.bind(this),
            traceUtf16: this.traceUtf16.bind(this),
            tracef: this.tracef.bind(this),
            seed: Date.now,
            abort: function() {
            }
        };
        const module = await WebAssembly.instantiate(wasmBuffer, {
            env
        });
        this.wasm = module.instance;
        if (this.wasm.exports._start != null) {
            this.wasm.exports._start();
        }
        if (this.wasm.exports._initialize != null) {
            this.wasm.exports._initialize();
        }
    }
    text(textPtr, x, y) {
        const text = new Uint8Array(this.memory.buffer, textPtr);
        this.framebuffer.drawText(text, x, y);
    }
    textUtf8(textPtr, byteLength, x, y) {
        const text = new Uint8Array(this.memory.buffer, textPtr, byteLength);
        this.framebuffer.drawText(text, x, y);
    }
    textUtf16(textPtr, byteLength, x, y) {
        const text = new Uint16Array(this.memory.buffer, textPtr, byteLength >> 1);
        this.framebuffer.drawText(text, x, y);
    }
    blit(spritePtr, x, y, width, height, flags) {
        this.blitSub(spritePtr, x, y, width, height, 0, 0, width, flags);
    }
    blitSub(spritePtr, x, y, width, height, srcX, srcY, stride, flags) {
        const sprite = new Uint8Array(this.memory.buffer, spritePtr);
        const bpp2 = flags & 1;
        const flipX = flags & 2;
        const flipY = flags & 4;
        const rotate = flags & 8;
        this.framebuffer.blit(sprite, x, y, width, height, srcX, srcY, stride, bpp2, flipX, flipY, rotate);
    }
    diskr(destPtr, size) {
        let str;
        try {
            str = localStorage.getItem("disk");
        } catch (error) {
            if (true) {
                console.error(error);
            }
        }
        if (str == null) {
            return 0;
        }
        const dest = new Uint8Array(this.memory.buffer, destPtr, Math.min(size, 1024));
        const bytesRead = decode(str, dest);
        return bytesRead;
    }
    diskw(srcPtr, size) {
        const bytesWritten = Math.min(size, 1024);
        const src = new Uint8Array(this.memory.buffer, srcPtr, bytesWritten);
        const str = encode(src);
        try {
            localStorage.setItem("disk", str);
        } catch (error) {
            if (true) {
                console.error(error);
            }
            return 0;
        }
        return bytesWritten;
    }
    getCString(ptr) {
        let str = "";
        for(;;){
            const c = this.data.getUint8(ptr++);
            if (c == 0) {
                break;
            }
            str += String.fromCharCode(c);
        }
        return str;
    }
    print(str) {
        console.log(str);
        if (null != null && null.readyState == 1) {
            null.send(str);
        }
    }
    trace(cstrPtr) {
        this.print(this.getCString(cstrPtr));
    }
    traceUtf8(strUtf8Ptr, byteLength) {
        const strUtf8 = new Uint8Array(this.memory.buffer, strUtf8Ptr, byteLength);
        const str = new TextDecoder().decode(strUtf8);
        this.print(str);
    }
    traceUtf16(strUtf16Ptr, byteLength) {
        const strUtf16 = new Uint8Array(this.memory.buffer, strUtf16Ptr, byteLength);
        const str = new TextDecoder("utf-16").decode(strUtf16);
        this.print(str);
    }
    tracef(fmtPtr, argPtr) {
        var output = "";
        let ch;
        while(ch = this.data.getUint8(fmtPtr++)){
            if (ch == 37) {
                switch(ch = this.data.getUint8(fmtPtr++)){
                    case 37:
                        output += "%";
                        break;
                    case 99:
                        output += String.fromCharCode(this.data.getInt32(argPtr, true));
                        argPtr += 4;
                        break;
                    case 100:
                    case 120:
                        output += this.data.getInt32(argPtr, true).toString(ch == 100 ? 10 : 16);
                        argPtr += 4;
                        break;
                    case 115:
                        let cstrPtr = this.data.getUint32(argPtr, true);
                        output += this.getCString(cstrPtr);
                        argPtr += 4;
                        break;
                    case 102:
                        output += this.data.getFloat64(argPtr, true);
                        argPtr += 8;
                        break;
                }
            } else {
                output += String.fromCharCode(ch);
            }
        }
        this.print(output);
    }
    start() {
        if (this.wasm.exports.start != null) {
            this.wasm.exports.start();
        }
    }
    update() {
        if (this.paused) {
            return;
        }
        if (!this.getSystemFlag(1)) {
            this.framebuffer.clear();
        }
        if (this.wasm.exports.update != null) {
            this.wasm.exports.update();
        }
        this.composite();
    }
    composite() {
        const palette = new Uint32Array(this.memory.buffer, 4, 4 * 4);
        this.compositor.composite(palette, this.framebuffer);
    }
}
function setClass(element, className, enabled) {
    if (enabled) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
}
async function loadCartWasm(cartPath) {
    const res = await fetch(cartPath);
    return await res.arrayBuffer();
}
const run1 = async (contentElementId, cartPath, enableInput)=>{
    const runtime = new Runtime();
    const canvas1 = runtime.canvas;
    document.getElementById(contentElementId).appendChild(canvas1);
    let wasmBuffer = await loadCartWasm(cartPath);
    await runtime.load(wasmBuffer);
    runtime.start();
    async function reboot() {
        runtime.reset(true);
        await runtime.load(wasmBuffer);
        runtime.start();
    }
    function takeScreenshot() {
        runtime.composite();
        canvas1.toBlob((blob)=>{
            const url = URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = "wasm4-screenshot.png";
            anchor.click();
            URL.revokeObjectURL(url);
        });
    }
    let videoRecorder = null;
    function recordVideo() {
        if (videoRecorder != null) {
            return;
        }
        const mimeType = "video/webm";
        const videoStream = canvas1.captureStream();
        videoRecorder = new MediaRecorder(videoStream, {
            mimeType,
            videoBitsPerSecond: 25000000
        });
        const chunks = [];
        videoRecorder.ondataavailable = (event)=>{
            chunks.push(event.data);
        };
        videoRecorder.onstop = ()=>{
            const blob = new Blob(chunks, {
                type: mimeType
            });
            const url = URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = "wasm4-animation.webm";
            anchor.click();
            URL.revokeObjectURL(url);
        };
        videoRecorder.start();
        setTimeout(()=>{
            videoRecorder.requestData();
            videoRecorder.stop();
            videoRecorder = null;
        }, 4000);
    }
    let savedState = null;
    function saveState() {
        savedState = new Uint32Array(runtime.memory.buffer.slice());
    }
    function loadState() {
        if (savedState != null) {
            new Uint32Array(runtime.memory.buffer).set(savedState);
        }
    }
    function requestFullscreen() {
        if (document.fullscreenElement == null) {
            document.body.requestFullscreen({
                navigationUI: "hide"
            });
        }
    }
    const onMouseEvent = (event)=>{
        document.body.style.cursor = "";
        if (event.isPrimary) {
            const bounds = canvas1.getBoundingClientRect();
            const x = Math.fround(160 * (event.clientX - bounds.left) / bounds.width);
            const y = Math.fround(160 * (event.clientY - bounds.top) / bounds.height);
            const buttons = event.buttons & 7;
            runtime.setMouse(x, y, buttons);
        }
    };
    if (enableInput) {
        window.addEventListener("pointerdown", onMouseEvent);
        window.addEventListener("pointerup", onMouseEvent);
        window.addEventListener("pointermove", onMouseEvent);
    }
    canvas1.addEventListener("contextmenu", (event)=>{
        event.preventDefault();
    });
    const HOTKEYS = {
        50: saveState,
        52: loadState,
        82: reboot,
        120: takeScreenshot,
        121: recordVideo,
        122: requestFullscreen
    };
    let isKeyboard = true;
    const onKeyboardEvent = (event)=>{
        const down = event.type == "keydown";
        if (!isKeyboard) {
            runtime.setGamepad(0, 0);
        }
        isKeyboard = true;
        runtime.unlockAudio();
        document.body.style.cursor = "none";
        if (down) {
            const hotkeyFn = HOTKEYS[event.keyCode];
            if (hotkeyFn) {
                hotkeyFn();
                event.preventDefault();
                return;
            }
        }
        let mask = 0;
        switch(event.keyCode){
            case 88:
            case 32:
            case 81:
                mask = BUTTON_X;
                break;
            case 90:
            case 18:
            case 186:
            case 67:
            case 74:
            case 89:
                mask = BUTTON_Z;
                break;
            case 38:
                mask = BUTTON_UP;
                break;
            case 40:
                mask = BUTTON_DOWN;
                break;
            case 37:
                mask = BUTTON_LEFT;
                break;
            case 39:
                mask = BUTTON_RIGHT;
                break;
        }
        if (mask != 0) {
            event.preventDefault();
            runtime.maskGamepad(0, mask, down);
        }
    };
    if (enableInput) {
        window.addEventListener("keydown", onKeyboardEvent);
        window.addEventListener("keyup", onKeyboardEvent);
    }
    let usedGamepad = -1;
    function processGamepad() {
        if (usedGamepad === -1) {
            return;
        }
        const gamepad = navigator.getGamepads()[usedGamepad];
        if (!gamepad) {
            return;
        }
        const buttons = gamepad.buttons;
        const axes = gamepad.axes;
        const dpad = buttons.length > 12;
        const up = dpad && buttons[12].pressed || axes[1] < -0.5;
        const down = dpad && buttons[13].pressed || axes[1] > 0.5;
        const left = dpad && buttons[14].pressed || axes[0] < -0.5;
        const right = dpad && buttons[15].pressed || axes[0] > 0.5;
        const x = buttons[0].pressed || buttons[6].pressed;
        const z = buttons[1].pressed || buttons[7].pressed;
        let buttonMask = 0;
        buttonMask |= BUTTON_UP & -up;
        buttonMask |= BUTTON_DOWN & -down;
        buttonMask |= BUTTON_LEFT & -left;
        buttonMask |= BUTTON_RIGHT & -right;
        buttonMask |= BUTTON_X & -x;
        buttonMask |= BUTTON_Z & -z;
        if (buttonMask !== 0 || !isKeyboard) {
            isKeyboard = false;
            runtime.setGamepad(0, buttonMask);
        }
    }
    if (enableInput) {
        window.addEventListener("gamepadconnected", (e)=>{
            for (const g of navigator.getGamepads()){
                if (g) {
                    usedGamepad = g.index;
                    break;
                }
            }
        });
        window.addEventListener('gamepaddisconnected', (e)=>{
            if (e.gamepad.index !== usedGamepad) {
                return;
            }
            usedGamepad = -1;
            runtime.setGamepad(0, 0);
            for (const g of navigator.getGamepads()){
                if (g) {
                    usedGamepad = g.index;
                    break;
                }
            }
        });
    }
    const dpad = document.getElementById("gamepad-dpad");
    const action1 = document.getElementById("gamepad-action1");
    const action2 = document.getElementById("gamepad-action2");
    const touchEvents = new Map();
    function onPointerEvent(event) {
        if (event.type == "pointerup") {
            if (event.pointerType == "touch") {
                requestFullscreen();
            }
            runtime.unlockAudio();
        }
        if (event.pointerType != "touch") {
            return;
        }
        event.preventDefault();
        switch(event.type){
            case "pointerdown":
            case "pointermove":
                touchEvents.set(event.pointerId, event);
                break;
            default:
                touchEvents.delete(event.pointerId);
                break;
        }
        let buttons = 0;
        if (touchEvents.size) {
            const DPAD_MAX_DISTANCE = 100;
            const DPAD_DEAD_ZONE = 10;
            const BUTTON_MAX_DISTANCE = 50;
            const DPAD_ACTIVE_ZONE = 3 / 5;
            const dpadBounds = dpad.getBoundingClientRect();
            const dpadX = dpadBounds.x + dpadBounds.width / 2;
            const dpadY = dpadBounds.y + dpadBounds.height / 2;
            const action1Bounds = action1.getBoundingClientRect();
            const action1X = action1Bounds.x + action1Bounds.width / 2;
            const action1Y = action1Bounds.y + action1Bounds.height / 2;
            const action2Bounds = action2.getBoundingClientRect();
            const action2X = action2Bounds.x + action2Bounds.width / 2;
            const action2Y = action2Bounds.y + action2Bounds.height / 2;
            let x, y, dist, cosX, cosY;
            for (let touch of touchEvents.values()){
                x = touch.clientX - dpadX;
                y = touch.clientY - dpadY;
                dist = Math.sqrt(x * x + y * y);
                if (dist < 100 && dist > 10) {
                    cosX = x / dist;
                    cosY = y / dist;
                    if (-cosX > DPAD_ACTIVE_ZONE) {
                        buttons |= BUTTON_LEFT;
                    } else if (cosX > DPAD_ACTIVE_ZONE) {
                        buttons |= BUTTON_RIGHT;
                    }
                    if (-cosY > DPAD_ACTIVE_ZONE) {
                        buttons |= BUTTON_UP;
                    } else if (cosY > DPAD_ACTIVE_ZONE) {
                        buttons |= BUTTON_DOWN;
                    }
                }
                x = touch.clientX - action1X;
                y = touch.clientY - action1Y;
                if (x * x + y * y < 50 * 50) {
                    buttons |= BUTTON_X;
                }
                x = touch.clientX - action2X;
                y = touch.clientY - action2Y;
                if (x * x + y * y < 50 * 50) {
                    buttons |= BUTTON_Z;
                }
            }
        }
        const nowXZDown = buttons & (1 | 2);
        const wasXZDown = runtime.getGamepad(0) & (1 | 2);
        if (nowXZDown && !wasXZDown) {
            navigator.vibrate(1);
        }
        setClass(action1, "pressed", buttons & 1);
        setClass(action2, "pressed", buttons & 2);
        setClass(dpad, "pressed-left", buttons & 16);
        setClass(dpad, "pressed-right", buttons & 32);
        setClass(dpad, "pressed-up", buttons & 64);
        setClass(dpad, "pressed-down", buttons & 128);
        runtime.setGamepad(0, buttons);
    }
    if (enableInput) {
        window.addEventListener("pointercancel", onPointerEvent);
        window.addEventListener("pointerdown", onPointerEvent);
        window.addEventListener("pointermove", onPointerEvent);
        window.addEventListener("pointerup", onPointerEvent);
    }
    const gamepadOverlay = document.getElementById("gamepad");
    const INTERVAL = 1000 / 60;
    let lastFrame = performance.now();
    function loop() {
        processGamepad();
        requestAnimationFrame(loop);
        const now = performance.now();
        const deltaFrame = now - lastFrame;
        if (deltaFrame >= INTERVAL) {
            lastFrame = now - deltaFrame % INTERVAL;
            runtime.update();
        }
    }
    loop();
};
export { run1 as run };
