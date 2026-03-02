const castDebugLogger = cast.debug.CastDebugLogger.getInstance();

const context = cast.framework.CastReceiverContext.getInstance();

context.addEventListener(cast.framework.system.EventType.READY, () => {
  if (!castDebugLogger.debugOverlayElement_) {
      // Enable debug logger and show a 'DEBUG MODE' overlay at top left corner.
      castDebugLogger.setEnabled(true);
  }
});
context.start();