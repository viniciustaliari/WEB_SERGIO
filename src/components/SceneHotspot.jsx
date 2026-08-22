export default function SceneHotspot({
  dialogueStyle,
  isVisible = false,
  label,
  onClick,
  onPointerEnter,
  onPointerLeave,
  regions,
}) {
  return (
    <div className="scene-hotspot absolute inset-0">
      {regions.map((region, index) => (
        <div
          key={`${label}-${index}`}
          className={`scene-hotspot-region${isVisible ? ' scene-hotspot-region--visible' : ''}`}
          onClick={onClick}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          style={region}
        />
      ))}
      <div className="scene-hotspot-dialogue" style={dialogueStyle}>
        {label}
      </div>
    </div>
  )
}
