export default function Header({ step, steps }) {
  console.log(step, 'of', steps)
  return (
    <div>
      {step + 1} of {steps}
    </div>
  )
}
