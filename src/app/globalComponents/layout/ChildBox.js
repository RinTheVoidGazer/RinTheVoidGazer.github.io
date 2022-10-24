// Similar to ParentBox, but a ChildBox doesn't need to control its content positioning.
const ChildBox = ({ children, flex = 1, gap = "5px", padding = null }) => {
  return (
    <div
      style={{
        flex: flex,
        gap: gap,
        padding: padding,
        background: "gray",
      }}
    >
      {children}
    </div>
  )
}

export default ChildBox
