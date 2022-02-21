import dividerStories from "@kickstartds/base/lib/divider/divider.stories";
import schema from "@kickstartds/base/lib/divider/divider.schema.dereffed.json";

export default {
  ...dividerStories,
  parameters: {
    jsonschema: schema,
  },
};
