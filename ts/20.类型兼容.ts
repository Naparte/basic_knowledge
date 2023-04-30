interface AA {
  name: string;
  agr: number;
}

interface BB {
  name: string;
  agr: number;
  sex: string;
}

let aa: AA = {
  name: "Naparte",
  agr: 25,
};

let bb = {
  name: "Naparte",
  agr: 25,
  sex: "man",
};

// 协变
aa = bb;

// 逆变

let fna = (params: AA) => {};

let fnb = (params: BB) => {};

fnb = fna;
// fna = fnb;不行
