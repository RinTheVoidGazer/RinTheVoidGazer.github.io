// A div that controls it's content's positioning.
const ParentBox = ({
  children,
  flexDirection = "row",
  gap = "5px",
  padding = null,
  justifyContent = null,
  alignItems = null,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: flexDirection,
        gap: gap,
        padding: padding,
        justifyContent: justifyContent,
        alignItems: alignItems,
        // background: "lavender",
      }}
    >
      {children}
    </div>
  )
}

export default ParentBox
