import './button.css';

export default function Button () {
    return(
        <>
        <button className="button button-item">
  <span className="button-bg">
    <span className="button-bg-layers">
      <span className="button-bg-layer button-bg-layer-1 -purple"></span>
      <span className="button-bg-layer button-bg-layer-2 -turquoise"></span>
      <span className="button-bg-layer button-bg-layer-3 -yellow"></span>
    </span>
  </span>
  <span className="button-inner">
    <span className="button-inner-static">Book an Appointment</span>
    <span className="button-inner-hover">Book an Appointment</span>
  </span>
</button>
        </>
    )
}