export const configureSwagger = (context) => {
    context.swagger = context.swagger || {};
    context.swagger.paths = context.swagger.paths || {};
    context.swagger.components = context.swagger.components || {};
    context.swagger.components.schemas = context.swagger.components.schemas || {};

    context.swagger.components.schemas['SigninRequest'] = {
        properties: {
            password: {
                minLength: 1,
                type: 'string'
            },
            email: {
                minLength: 1,
                type: "string",
                format: "email"
            }
        },
        type: "object",
        required: [
            "email",
            "password"
        ]
    };

    context.swagger.components.schemas['SigninResponse'] = {
        properties: {
            token: {
                minLength: 1,
                type: 'string'
            }
        },
        type: "object",
        required: [
            "token"
        ]
    };

    context.swagger.paths['/signin'] = {
        post: {
            operationId: "AuthController.signin",
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: "#/components/schemas/SigninRequest"
                        }
                    }
                },
                description: "CreateUserRequest",
                required: false
            },
            responses: {
                200: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/SigninResponse"
                            }
                        }
                    },
                    description: ""
                }
            },
            summary: "Sign in",
            tags: [
                "Authentication"
            ],
            security: [
                {
                    "basicAuth":[]
                }
            ]
        }
    }
};
