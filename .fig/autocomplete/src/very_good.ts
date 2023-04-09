const completionSpec: Fig.Spec = {
  name: "very_good",
  description: "",
  subcommands: [
    {
      name: "create",
      description: "Creates a new very good project in the specified directory",
      subcommands: [
        {
          name: "dart_cli",
          description: "Generate a Very Good Dart CLI application",
          args: [
            {
              isOptional: false,
              name: "project-name"
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints usage information"
            },
            {
              name: ["-o", "--output-directory"],
              description: "The desired output directory when creating a new project"
            },
            {
              name: ["--description"],
              description: "The description for this new project. (Defaults to \"A Very Good Project created by Very Good CLI.\""
            },
            {
              name: ["--publishable"],
              description: "Whether the generated project is intended to be published",
            },
            {
              name: ["--executable-name"],
              description: "The CLI executable name (defaults to project name)"
            },
          ],
        },
        {
          name: "dart_package",
          description: "Generate a Very Good Dart package",
          args: [
            {
              isOptional: false,
              name: "project-name"
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints usage information"
            },
            {
              name: ["-o", "--output-directory"],
              description: "The desired output directory when creating a new project"
            },
            {
              name: ["--description"],
              description: "The description for this new project. (Defaults to \"A Very Good Project created by Very Good CLI.\""
            },
            {
              name: ["--publishable"],
              description: "Whether the generated project is intended to be published",
            },
          ],
        },
        {
          name: "docs_site",
          description: "Generate a Very Good Documentation site",
          args: [
            {
              isOptional: false,
              name: "project-name"
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints usage information"
            },
            {
              name: ["-o", "--output-directory"],
              description: "The desired output directory when creating a new project"
            },
            {
              name: ["--description"],
              description: "The description for this new project. (Defaults to \"A Very Good Project created by Very Good CLI.\""
            },
            {
              name: ["--org-name"],
              description: "The organization for this new project (defaults to \"my-org\""
            },
          ],
        },
        {
          name: "flame_game",
          description: "Generate a Very Good Flame game",
          args: [
            {
              isOptional: false,
              name: "project-name"
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints usage information"
            },
            {
              name: ["-o", "--output-directory"],
              description: "The desired output directory when creating a new project"
            },
            {
              name: ["--description"],
              description: "The description for this new project. (Defaults to \"A Very Good Project created by Very Good CLI.\""
            },
            {
              name: ["--org-name"],
              description: "The organization for this new project (defaults to \"com.example.verygoodcore\""
            },
          ],
        },
        {
          name: "flutter_app",
          description: "Generate a Very Good Flutter application",
          args: [
            {
              isOptional: false,
              name: "project-name"
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints usage information"
            },
            {
              name: ["-o", "--output-directory"],
              description: "The desired output directory when creating a new project"
            },
            {
              name: ["--description"],
              description: "The description for this new project. (Defaults to \"A Very Good Project created by Very Good CLI.\""
            },
            {
              name: ["-t", "--template"],
              description: "The template used to generate this new project",
              args: [
                { isOptional: true,
                  suggestions: [
                    {
                      name: "core",
                      description: "(default) Generate a Very Good Flutter application",
                    }, 
                    {
                      name: "wear",
                      description: "Generate a Very Good Flutter Wear OS application"
                    },
                  ], 
                },
              ],
            },
            {
              name: ["--org-name"],
              description: "The organization for this new project (defaults to \"com.example.verygoodcore\""
            },
            {
              name: ["--application-id"],
              description: "The bundle identifier on iOS or application id on Android. (defaults to <org-name>.<project-name>)"
            }
          ],
        },
        {
          name: "flutter_package",
          description: "Generate a Very Good Flutter package",
          args: [
            {
              isOptional: false,
              name: "project-name"
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints usage information"
            },
            {
              name: ["-o", "--output-directory"],
              description: "The desired output directory when creating a new project"
            },
            {
              name: ["--description"],
              description: "The description for this new project. (Defaults to \"A Very Good Project created by Very Good CLI.\""
            },
            {
              name: ["--publishable"],
              description: "Whether the generated project is intended to be published",
            },
          ],
        },
        {
          name: "flutter_plugin",
          description: "Generate a Very Good Flutter plugin",
          args: [
            {
              isOptional: false,
              name: "project-name"
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Prints usage information"
            },
            {
              name: ["-o", "--output-directory"],
              description: "The desired output directory when creating a new project"
            },
            {
              name: ["--description"],
              description: "The description for this new project. (Defaults to \"A Very Good Project created by Very Good CLI.\""
            },
            {
              name: ["--publishable"],
              description: "Whether the generated project is intended to be published",
            },
            {
              name: ["--platforms"],
              description: "The platforms supported by the plugin. By default, all platforms are enabled. Example: --platforms=android,ios",
              args: {
                isOptional: true,
                suggestions: ["android", "ios", "linux", "macos", "web", "windows"],
              }
            }
          ]
        }
      ],
    },
    {
      name: "packages",
      description: "Command for managing packages",
      subcommands: [
        {
          name: "get",
          description: "Get packages in a Dart or Flutter project"
        },
      ],
    },
    {
      name: "test",
      description: "Run tests in a Dart or Flutter project"
    },
    {
      name: "update",
      description: "Update Very Good CLI"
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Print usage information",
    },
    {
      name: ["--version"],
      description: "Print the current version"
    },
    {
      name: ['--analytics'],
      description: "Toggle anonymous usage stastics"
    },
    {
      name: ["--verbose"],
      description: "Enable verbose logging"
    },
    {
      name: ["--no-verbose"],
      description: "Disable verbose logging"
    },
  ],
};
export default completionSpec;