const countPush = (count, dir, speed) => {
  if (speed < 10) {
    count[dir]["0-10"] = count[dir]["0-10"] + 1;
  } else if (speed < 20) {
    count[dir]["10-20"] = count[dir]["10-20"] + 1;
  } else if (speed < 30) {
    count[dir]["20-30"] = count[dir]["20-30"] + 1;
  } else if (speed < 40) {
    count[dir]["30-40"] = count[dir]["30-40"] + 1;
  } else if (speed < 50) {
    count[dir]["40-50"] = count[dir]["40-50"] + 1;
  } else {
    count[dir]["50+"] = count[dir]["50+"] + 1;
  }
};

export const classifyDir = direction => {
  const dTh = 11.25;
  let dir;
  if (direction >= 360 - dTh || direction < dTh) {
    dir = "N";
  } else if (direction >= dTh && direction < dTh * 3) {
    dir = "NNE";
  } else if (direction >= dTh * 3 && direction < dTh * 5) {
    dir = "NE";
  } else if (direction >= dTh * 5 && direction < dTh * 7) {
    dir = "ENE";
  } else if (direction >= dTh * 7 && direction < dTh * 9) {
    dir = "E";
  } else if (direction >= dTh * 9 && direction < dTh * 11) {
    dir = "ESE";
  } else if (direction >= dTh * 11 && direction < dTh * 13) {
    dir = "SE";
  } else if (direction >= dTh * 13 && direction < dTh * 15) {
    dir = "SSE";
  } else if (direction >= dTh * 15 && direction < dTh * 17) {
    dir = "S";
  } else if (direction >= dTh * 17 && direction < dTh * 19) {
    dir = "SSW";
  } else if (direction >= dTh * 19 && direction < dTh * 21) {
    dir = "SW";
  } else if (direction >= dTh * 21 && direction < dTh * 23) {
    dir = "WSW";
  } else if (direction >= dTh * 23 && direction < dTh * 25) {
    dir = "W";
  } else if (direction >= dTh * 25 && direction < dTh * 27) {
    dir = "WNW";
  } else if (direction >= dTh * 27 && direction < dTh * 29) {
    dir = "NW";
  } else if (direction >= dTh * 29 && direction < dTh * 31) {
    dir = "NNW";
  } else {
    throw new Error("over 360 or under 0");
  }
  return dir;
};

export const calculateWindRose = data => {
  const count = {
    N: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    NNE: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    NE: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    ENE: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    E: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    ESE: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    SE: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    SSE: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    S: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    SSW: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    SW: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    WSW: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    W: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    WNW: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    NW: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
    NNW: {
      "0-10": 0.0,
      "10-20": 0.0,
      "20-30": 0.0,
      "30-40": 0.0,
      "40-50": 0.0,
      "50+": 0.0,
    },
  };
  const dataLength = data.direction.length;
  data.direction.map((direction, index) => {
    const speed = data.speed[index];
    const dir = classifyDir(direction);
    return countPush(count, dir, speed);
  });
  const ret = Object.keys(count).map(key => {
    let total = 0;
    const elements = Object.keys(count[key]).map(subkey => {
      const E = count[key][subkey] / dataLength;
      total += E;
      return { [subkey]: E };
    });
    const obj = {};
    elements.map(val => {
      const [elKey] = Object.keys(val);
      const [elVal] = Object.values(val);
      obj[elKey] = elVal;
      return obj;
    });
    return {
      angle: key,
      ...obj,
      total,
    };
  });
  return ret;
};
