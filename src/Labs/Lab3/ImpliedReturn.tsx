export default function ImpliedReturn() {
  const multiply = (a: number, b: number) => a * b;
  const FourTimesFive = multiply(4, 5);
  console.log(FourTimesFive);
  return (
    <div>
      <h4>Implied return</h4>
      FourTimesFive = {FourTimesFive} <br />
      multiply(4,5) = {multiply(4, 5)} <hr />
    </div>
  );
}
