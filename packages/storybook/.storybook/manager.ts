import { addons, types } from "storybook/manager-api"
import { ThemeTool } from "./theme-tool"

addons.register("openbmw/theme-toggle", () => {
  addons.add("openbmw/theme-toggle/tool", {
    type: types.TOOL,
    title: "Theme",
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: ThemeTool,
  })
})
