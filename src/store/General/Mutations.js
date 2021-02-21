// Mutations

export default {
  WindowWidth (state, payload) { state.windowWidth = parseInt(payload, 10) || 0 }
}
