import { forwardRef } from 'react'

function SceneCharacter(
  {
    alt,
    anchorClassName,
    bubbleClassName = 'character-dialogue',
    bubbleRef = null,
    bubbleText = '',
    className = '',
    imageClassName,
    imageRef,
    interactive = false,
    onPointerEnter,
    onPointerLeave,
    src,
    style,
  },
  ref,
) {
  return (
    <div
      ref={ref}
      className={`${anchorClassName}${interactive ? ' pointer-events-auto cursor-pointer' : ''}${className ? ` ${className}` : ''}`}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={style}
    >
      {bubbleText ? (
        <div ref={bubbleRef} className={bubbleClassName}>
          {bubbleText}
        </div>
      ) : null}
      <img ref={imageRef} src={src} alt={alt} className={imageClassName} />
    </div>
  )
}

const ForwardedSceneCharacter = forwardRef(SceneCharacter)

export default ForwardedSceneCharacter
