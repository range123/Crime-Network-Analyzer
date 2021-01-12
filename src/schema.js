export const schema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    nodes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer"
          },
          name: {
            type: "string"
          },
          alias: {
            type: "string"
          },
          img: {
            type: "string"
          },
          gender: {
            type: "string"
          },
          crimes: {
            type: "array",
            items: {
              type: "object",
              properties: {
                type: {
                  type: "string"
                }
              },
              required: ["type"]
            }
          },
          address: {
            type: "string"
          }
        },
        required: ["id", "name", "alias", "img", "gender", "crimes", "address"]
      }
    },
    edges: {
      type: "array",
      items: {
        type: "object",
        properties: {
          from: {
            type: "integer"
          },
          to: {
            type: "integer"
          }
        },
        required: ["from", "to"]
      }
    }
  },
  required: ["nodes", "edges"]
};
