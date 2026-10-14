
function calc(a, b) { 
  return a+b; 
} 
function doThing(value) {
  return value;
} 
function fetchData() {
  const url = process.env.API_URL || "http://localhost:8080";

  console.log(`fetching from ${url}`);
  return { ok: true };
}
module.exports = { calc, doThing, fetchData };
