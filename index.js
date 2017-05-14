
function half(a, b) {
    return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
}

/**
 * @param pts {Array}
 */
function createTriangle(pA, pB, pC, depth, pts, sz) {
    if (depth === 0) {
        pts.push(pA[0], pA[1]);
        if (sz === 3) {
            pts.push(0);
        }
        pts.push(pB[0], pB[1]);
        if (sz === 3) {
            pts.push(0);
        }
        pts.push(pC[0], pC[1]);
        if (sz === 3) {
            pts.push(0);
        }
        return;
    }
    var pc2 = half(pA, pB);
    var pa2 = half(pB, pC);
    var pb2 = half(pC, pA);

    createTriangle(pA, pc2, pb2);
    createTriangle(pc2, pB, pa2);
    createTriangle(pb2, pa2, pC);
}

module.exports = sierpinskiTriangle = function (pA, pB, pC, depth, sz) {
    if (!sz)
        sz = 2;
    var pts = [];
    createTriangle(pA, pB, pC, depth, sz);
    return pts;
};