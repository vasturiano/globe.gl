// OrbitControls tracks touch positions in page coordinates, while
// _updateZoomParameters expects viewport coordinates (like mouse-wheel events).
export default function fixTouchZoom(controls) {
  const handleTouchMoveDolly = controls._handleTouchMoveDolly;

  controls._handleTouchMoveDolly = function(event) {
    handleTouchMoveDolly.call(this, event);

    if (!this.zoomToCursor) return;

    const position = this._getSecondPointerPosition(event);
    // Derive the scroll offset from the event, including in embedded windows.
    const scrollX = event.pageX - event.clientX;
    const scrollY = event.pageY - event.clientY;

    // Correct the zoom ray before OrbitControls applies the camera update.
    this._updateZoomParameters(
      (event.pageX + position.x) * 0.5 - scrollX,
      (event.pageY + position.y) * 0.5 - scrollY
    );
  };
}
