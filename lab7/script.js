const pi = Math.PI;
const pi_rad = pi / 180;


function printTable() {
  console.log("      Instruction");
  console.log("");
  console.log("Symbol\t->\tRepresents");
  console.log("");
  console.log("leg\t->\tThe leg of a triangle ");
  console.log("");
  console.log("hypotenuse\t->\tThe hypotenuse of a triangle ");
  console.log("");
  console.log("adjacent angle\t->\tThe angle between the hypotenuse and an adjacent leg ");
  console.log("");
  console.log("opposite angle\t->\t The angle between the hypotenuse and the opposite leg");
  console.log("");
  console.log("angle\t->\tThe acute angle of the triangle ");
  console.log("\n");
  console.log("Therefore, the function should take arguments in the following order:");
  console.log("1. The value of the first argument,");
  console.log("2. The type of the first argument (see table above),");
  console.log("3. The value of the second argument,");
  console.log("4. The type of the second argument (see table above).");
  console.log("For example:");
  console.log('triangle(10,"leg",16,"hypotenuse");');
}

function triangle(value1, type1, value2, type2) {
  if (!value1 || !value2 || !type1 || !type2) {
    console.log("Failed");
    console.log("Input all parameters");
    return;
  } else if (value1 <= 0 || value2 <= 0) {
    console.log("Failed");
    console.log("Zero or negative input");
    return;
  }

  switch (type1) {
    case "leg":
      switch (type2) {
        case "leg":
          let C = Math.sqrt(Math.pow(value1, 2) + Math.pow(value2, 2));

          if (
            value1 + value2 > C &&
            value1 + C > value2 &&
            value2 + C > value1
          ) {
            console.log("A = " + value1 + "\n" + "B = " + value2 + "\n" + "C = " + C);
            let alpha = Math.atan(value1 / value2) / pi_rad;

            let beta = Math.atan(value2 / value1) / pi_rad;
            console.log("alpha = " + alpha + "\n" + "beta = " + beta + "\n" + "gamma = 90");
            console.log("success");
            return;
          }

          console.log("Failed");
          console.log("Something is wrong with parameters");
          return;

        case "hypotenuse":
          let B1, C1;
          B1 = value1;
          C1 = value2;

          if (B1 > C1) {
            console.log("hypotenuse must be longer than leg");
            console.log("Failed");
            return;
          }

          let A1 = Math.sqrt(Math.pow(C1, 2) - Math.pow(B1, 2));

          if (
            B1 + C1 > A1 &&
            B1 + A1 > C1 &&
            C1 + A1 > B1
          ) {
            console.log("A = " + A1 + "\n" + "B = " + B1 + "\n" + "C = " + C1);

            let alpha = Math.atan(A1 / B1) / pi_rad;

            let beta = Math.atan(B1 / A1) / pi_rad;
            console.log("alpha = " + alpha + "\n" + "beta = " + beta + "\n" + "gamma = 90");
            console.log("success");
            return;
          }

          console.log("Failed");
          console.log("Something is wrong with parameters");
          return;

        case "adjacent angle":
          let B2, alpha2;
          B2 = value1;
          alpha2 = value2;

          if (alpha2 >= 90) {
            console.log("adjacent angle must be less than 90");
            console.log("Failed");
            return;
          }

          let C2 = B2 / Math.cos(alpha2 * pi_rad);
          let A2 = B2 * Math.tan(alpha2 * pi_rad);

          if (
            B2 + C2 > A2 &&
            B2 + A2 > C2 &&
            C2 + A2 > B2
          ) {
            console.log("A = " + A2 + "\n" + "B = " + B2 + "\n" + "C = " + C2);
            let beta = 90 - alpha2;
            console.log("alpha = " + alpha2 + "\n" + "beta = " + beta + "\n" + "gamma = 90");
            console.log("success");
            return;
          }

          console.log("Failed");
          console.log("Something is wrong with parameters");
          return;

        case "opposite angle":
          let B3, beta3;
          B3 = value1;
          beta3 = value2;

          if (beta3 >= 90) {
            console.log("opposite angle must be less than 90");
            console.log("Failed");
            return;
          }

          let C3 = B3 / Math.sin(beta3 * pi_rad);
          let A3 = Math.sqrt(C3 * C3 - B3 * B3);

          if (
            B3 + C3 > A3 &&
            B3 + A3 > C3 &&
            C3 + A3 > B3
          ) {
            console.log("A = " + A3 + "\n" + "B = " + B3 + "\n" + "C = " + C3);
            let alpha = 90 - beta3;
            console.log("alpha = " + alpha + "\n" + "beta = " + beta3 + "\n" + "gamma = 90");
            console.log("success");
            return;
          }

          console.log("Failed");
          console.log("Something is wrong with parameters");
          return;

        default:
          console.log("Failed");
          return;
      }

    case "angle":
      switch (type2) {
        case "hypotenuse":
          let C4, beta4;
          beta4 = value1;
          C4 = value2;

          if (beta4 >= 90) {
            console.log("angle must be less than 90");
            console.log("Failed");
            return;
          }

          let A4 = C4 * Math.sin(beta4 * pi_rad);
          let B4 = C4 * Math.cos(beta4 * pi_rad);

          if (
            B4 + C4 > A4 &&
            B4 + A4 > C4 &&
            C4 + A4 > B4
          ) {
            console.log("A = " + A4 + "\n" + "B = " + B4 + "\n" + "C = " + C4);
            let alpha = 90 - beta4;
            console.log("alpha = " + alpha + "\n" + "beta = " + beta4 + "\n" + "gamma = 90");
            console.log("success");
            return;
          }
          console.log("Failed");
          console.log("Something is wrong with parameters");
          return;

        default:
          console.log("Failed");
          return;
      }

    case "leg":
      console.log("Failed");
      return;

    default:
      console.log("Check instruction");
      return;
  }
}



printTable()