"use strict";
/**
 * @license
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsutils_1 = require("tsutils");
var ts = require("typescript");
var Lint = require("../index");
var utils_1 = require("../utils");
exports.ALL = "all";
exports.ARGUMENT_CLASSES = "classes";
exports.ARGUMENT_ENUMS = "enums";
exports.ARGUMENT_ENUM_MEMBERS = "enum-members";
exports.ARGUMENT_FUNCTIONS = "functions";
exports.ARGUMENT_INTERFACES = "interfaces";
exports.ARGUMENT_METHODS = "methods";
exports.ARGUMENT_NAMESPACES = "namespaces";
exports.ARGUMENT_PROPERTIES = "properties";
exports.ARGUMENT_TYPES = "types";
exports.ARGUMENT_VARIABLES = "variables";
exports.DESCRIPTOR_LOCATIONS = "locations";
exports.DESCRIPTOR_PRIVACIES = "privacies";
exports.DESCRIPTOR_VISIBILITIES = "visibilities";
exports.LOCATION_INSTANCE = "instance";
exports.LOCATION_STATIC = "static";
exports.PRIVACY_PRIVATE = "private";
exports.PRIVACY_PROTECTED = "protected";
exports.PRIVACY_PUBLIC = "public";
exports.VISIBILITY_EXPORTED = "exported";
exports.VISIBILITY_INTERNAL = "internal";
var Rule = /** @class */ (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* tslint:enable:object-literal-sort-keys */
    Rule.prototype.applyWithProgram = function (sourceFile, program) {
        var options = this.getOptions();
        var completedDocsWalker = new CompletedDocsWalker(sourceFile, options, program);
        completedDocsWalker.setRequirements(this.getRequirements(options.ruleArguments));
        return this.applyWithWalker(completedDocsWalker);
    };
    Rule.prototype.getRequirements = function (ruleArguments) {
        if (ruleArguments.length === 0) {
            ruleArguments = Rule.defaultArguments;
        }
        return Requirement.constructRequirements(ruleArguments);
    };
    Rule.FAILURE_STRING_EXIST = "Documentation must exist for ";
    Rule.defaultArguments = [
        exports.ARGUMENT_CLASSES,
        exports.ARGUMENT_FUNCTIONS,
        exports.ARGUMENT_METHODS,
        exports.ARGUMENT_PROPERTIES,
    ];
    Rule.ARGUMENT_DESCRIPTOR_BLOCK = {
        properties: (_a = {},
            _a[exports.DESCRIPTOR_VISIBILITIES] = {
                enum: [
                    exports.ALL,
                    exports.VISIBILITY_EXPORTED,
                    exports.VISIBILITY_INTERNAL,
                ],
                type: "string",
            },
            _a),
        type: "object",
    };
    Rule.ARGUMENT_DESCRIPTOR_CLASS = {
        properties: (_b = {},
            _b[exports.DESCRIPTOR_LOCATIONS] = {
                enum: [
                    exports.ALL,
                    exports.LOCATION_INSTANCE,
                    exports.LOCATION_STATIC,
                ],
                type: "string",
            },
            _b[exports.DESCRIPTOR_PRIVACIES] = {
                enum: [
                    exports.ALL,
                    exports.PRIVACY_PRIVATE,
                    exports.PRIVACY_PROTECTED,
                    exports.PRIVACY_PUBLIC,
                ],
                type: "string",
            },
            _b),
        type: "object",
    };
    /* tslint:disable:object-literal-sort-keys */
    Rule.metadata = {
        ruleName: "completed-docs",
        description: "Enforces documentation for important items be filled out.",
        optionsDescription: (_c = ["\n            `true` to enable for [\"", "\", \"", "\", \"", "\", \"", "\"],\n            or an array with each item in one of two formats:\n\n            * `string` to enable for that type\n            * `object` keying types to when their documentation is required:\n                * `\"", "\"` and `\"", "\"` may specify:\n                    * `\"", "\"`:\n                        * `\"", "\"`\n                        * `\"", "\"`\n                        * `\"", "\"`\n                        * `\"", "\"`\n                    * `\"", "\"`:\n                        * `\"", "\"`\n                        * `\"", "\"`\n                        * `\"", "\"`\n                * All other types may specify `\"", "\"`:\n                    * `\"", "\"`\n                    * `\"", "\"`\n                    * `\"", "\"`\n\n            Types that may be enabled are:\n\n            * `\"", "\"`\n            * `\"", "\"`\n            * `\"", "\"`\n            * `\"", "\"`\n            * `\"", "\"`\n            * `\"", "\"`\n            * `\"", "\"`\n            * `\"", "\"`\n            * `\"", "\"`\n            * `\"", "\"`"], _c.raw = ["\n            \\`true\\` to enable for [\"", "\", \"", "\", \"", "\", \"", "\"],\n            or an array with each item in one of two formats:\n\n            * \\`string\\` to enable for that type\n            * \\`object\\` keying types to when their documentation is required:\n                * \\`\"", "\"\\` and \\`\"", "\"\\` may specify:\n                    * \\`\"", "\"\\`:\n                        * \\`\"", "\"\\`\n                        * \\`\"", "\"\\`\n                        * \\`\"", "\"\\`\n                        * \\`\"", "\"\\`\n                    * \\`\"", "\"\\`:\n                        * \\`\"", "\"\\`\n                        * \\`\"", "\"\\`\n                        * \\`\"", "\"\\`\n                * All other types may specify \\`\"", "\"\\`:\n                    * \\`\"", "\"\\`\n                    * \\`\"", "\"\\`\n                    * \\`\"", "\"\\`\n\n            Types that may be enabled are:\n\n            * \\`\"", "\"\\`\n            * \\`\"", "\"\\`\n            * \\`\"", "\"\\`\n            * \\`\"", "\"\\`\n            * \\`\"", "\"\\`\n            * \\`\"", "\"\\`\n            * \\`\"", "\"\\`\n            * \\`\"", "\"\\`\n            * \\`\"", "\"\\`\n            * \\`\"", "\"\\`"], Lint.Utils.dedent(_c, exports.ARGUMENT_CLASSES, exports.ARGUMENT_FUNCTIONS, exports.ARGUMENT_METHODS, exports.ARGUMENT_PROPERTIES, exports.ARGUMENT_METHODS, exports.ARGUMENT_PROPERTIES, exports.DESCRIPTOR_PRIVACIES, exports.ALL, exports.PRIVACY_PRIVATE, exports.PRIVACY_PROTECTED, exports.PRIVACY_PUBLIC, exports.DESCRIPTOR_LOCATIONS, exports.ALL, exports.LOCATION_INSTANCE, exports.LOCATION_STATIC, exports.DESCRIPTOR_VISIBILITIES, exports.ALL, exports.VISIBILITY_EXPORTED, exports.VISIBILITY_INTERNAL, exports.ARGUMENT_CLASSES, exports.ARGUMENT_ENUMS, exports.ARGUMENT_ENUM_MEMBERS, exports.ARGUMENT_FUNCTIONS, exports.ARGUMENT_INTERFACES, exports.ARGUMENT_METHODS, exports.ARGUMENT_NAMESPACES, exports.ARGUMENT_PROPERTIES, exports.ARGUMENT_TYPES, exports.ARGUMENT_VARIABLES)),
        options: {
            type: "array",
            items: {
                anyOf: [
                    {
                        enum: Rule.defaultArguments,
                        type: "string",
                    },
                    {
                        type: "object",
                        properties: (_d = {},
                            _d[exports.ARGUMENT_CLASSES] = Rule.ARGUMENT_DESCRIPTOR_BLOCK,
                            _d[exports.ARGUMENT_ENUMS] = Rule.ARGUMENT_DESCRIPTOR_BLOCK,
                            _d[exports.ARGUMENT_ENUM_MEMBERS] = Rule.ARGUMENT_DESCRIPTOR_BLOCK,
                            _d[exports.ARGUMENT_FUNCTIONS] = Rule.ARGUMENT_DESCRIPTOR_BLOCK,
                            _d[exports.ARGUMENT_INTERFACES] = Rule.ARGUMENT_DESCRIPTOR_BLOCK,
                            _d[exports.ARGUMENT_METHODS] = Rule.ARGUMENT_DESCRIPTOR_CLASS,
                            _d[exports.ARGUMENT_NAMESPACES] = Rule.ARGUMENT_DESCRIPTOR_BLOCK,
                            _d[exports.ARGUMENT_PROPERTIES] = Rule.ARGUMENT_DESCRIPTOR_CLASS,
                            _d[exports.ARGUMENT_TYPES] = Rule.ARGUMENT_DESCRIPTOR_BLOCK,
                            _d[exports.ARGUMENT_VARIABLES] = Rule.ARGUMENT_DESCRIPTOR_BLOCK,
                            _d),
                    },
                ],
            },
        },
        optionExamples: [
            true,
            [true, exports.ARGUMENT_ENUMS, exports.ARGUMENT_FUNCTIONS, exports.ARGUMENT_METHODS],
            [
                true,
                (_e = {},
                    _e[exports.ARGUMENT_ENUMS] = true,
                    _e[exports.ARGUMENT_FUNCTIONS] = (_f = {},
                        _f[exports.DESCRIPTOR_VISIBILITIES] = [exports.VISIBILITY_EXPORTED],
                        _f),
                    _e[exports.ARGUMENT_METHODS] = (_g = {},
                        _g[exports.DESCRIPTOR_LOCATIONS] = exports.LOCATION_INSTANCE,
                        _g[exports.DESCRIPTOR_PRIVACIES] = [exports.PRIVACY_PUBLIC, exports.PRIVACY_PROTECTED],
                        _g),
                    _e),
            ],
        ],
        type: "style",
        typescriptOnly: false,
    };
    return Rule;
}(Lint.Rules.TypedRule));
exports.Rule = Rule;
var Requirement = /** @class */ (function () {
    // tslint:disable-next-line no-object-literal-type-assertion
    function Requirement(descriptor) {
        if (descriptor === void 0) { descriptor = {}; }
        this.descriptor = descriptor;
    }
    Requirement.constructRequirements = function (ruleArguments) {
        var requirements = new Map();
        for (var _i = 0, ruleArguments_1 = ruleArguments; _i < ruleArguments_1.length; _i++) {
            var ruleArgument = ruleArguments_1[_i];
            Requirement.addRequirements(requirements, ruleArgument);
        }
        return requirements;
    };
    Requirement.addRequirements = function (requirements, descriptor) {
        if (typeof descriptor === "string") {
            requirements.set(descriptor, new BlockRequirement());
            return;
        }
        for (var type in descriptor) {
            if (utils_1.hasOwnProperty(descriptor, type)) {
                requirements.set(type, (type === "methods" || type === "properties")
                    ? new ClassRequirement(descriptor[type])
                    : new BlockRequirement(descriptor[type]));
            }
        }
    };
    Requirement.prototype.createSet = function (values) {
        if (values === undefined || values.length === 0) {
            values = [exports.ALL];
        }
        return new Set(values);
    };
    return Requirement;
}());
var BlockRequirement = /** @class */ (function (_super) {
    tslib_1.__extends(BlockRequirement, _super);
    function BlockRequirement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visibilities = _this.createSet(_this.descriptor.visibilities);
        return _this;
    }
    BlockRequirement.prototype.shouldNodeBeDocumented = function (node) {
        if (this.visibilities.has(exports.ALL)) {
            return true;
        }
        if (Lint.hasModifier(node.modifiers, ts.SyntaxKind.ExportKeyword)) {
            return this.visibilities.has(exports.VISIBILITY_EXPORTED);
        }
        return this.visibilities.has(exports.VISIBILITY_INTERNAL);
    };
    return BlockRequirement;
}(Requirement));
var ClassRequirement = /** @class */ (function (_super) {
    tslib_1.__extends(ClassRequirement, _super);
    function ClassRequirement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.locations = _this.createSet(_this.descriptor.locations);
        _this.privacies = _this.createSet(_this.descriptor.privacies);
        return _this;
    }
    ClassRequirement.prototype.shouldNodeBeDocumented = function (node) {
        return this.shouldLocationBeDocumented(node) && this.shouldPrivacyBeDocumented(node);
    };
    ClassRequirement.prototype.shouldLocationBeDocumented = function (node) {
        if (this.locations.has(exports.ALL)) {
            return true;
        }
        if (Lint.hasModifier(node.modifiers, ts.SyntaxKind.StaticKeyword)) {
            return this.locations.has(exports.LOCATION_STATIC);
        }
        return this.locations.has(exports.LOCATION_INSTANCE);
    };
    ClassRequirement.prototype.shouldPrivacyBeDocumented = function (node) {
        if (this.privacies.has(exports.ALL)) {
            return true;
        }
        if (Lint.hasModifier(node.modifiers, ts.SyntaxKind.PrivateKeyword)) {
            return this.privacies.has(exports.PRIVACY_PRIVATE);
        }
        if (Lint.hasModifier(node.modifiers, ts.SyntaxKind.ProtectedKeyword)) {
            return this.privacies.has(exports.PRIVACY_PROTECTED);
        }
        return this.privacies.has(exports.PRIVACY_PUBLIC);
    };
    return ClassRequirement;
}(Requirement));
var CompletedDocsWalker = /** @class */ (function (_super) {
    tslib_1.__extends(CompletedDocsWalker, _super);
    function CompletedDocsWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompletedDocsWalker.prototype.setRequirements = function (requirements) {
        this.requirements = requirements;
    };
    CompletedDocsWalker.prototype.visitClassDeclaration = function (node) {
        this.checkNode(node, exports.ARGUMENT_CLASSES);
        _super.prototype.visitClassDeclaration.call(this, node);
    };
    CompletedDocsWalker.prototype.visitEnumDeclaration = function (node) {
        this.checkNode(node, exports.ARGUMENT_ENUMS);
        _super.prototype.visitEnumDeclaration.call(this, node);
    };
    CompletedDocsWalker.prototype.visitEnumMember = function (node) {
        // Enum members don't have modifiers, so use the parent
        // enum declaration when checking the requirements.
        this.checkNode(node, exports.ARGUMENT_ENUM_MEMBERS, node.parent);
        _super.prototype.visitEnumMember.call(this, node);
    };
    CompletedDocsWalker.prototype.visitFunctionDeclaration = function (node) {
        this.checkNode(node, exports.ARGUMENT_FUNCTIONS);
        _super.prototype.visitFunctionDeclaration.call(this, node);
    };
    CompletedDocsWalker.prototype.visitInterfaceDeclaration = function (node) {
        this.checkNode(node, exports.ARGUMENT_INTERFACES);
        _super.prototype.visitInterfaceDeclaration.call(this, node);
    };
    CompletedDocsWalker.prototype.visitMethodDeclaration = function (node) {
        this.checkNode(node, exports.ARGUMENT_METHODS);
        _super.prototype.visitMethodDeclaration.call(this, node);
    };
    CompletedDocsWalker.prototype.visitModuleDeclaration = function (node) {
        this.checkNode(node, exports.ARGUMENT_NAMESPACES);
        _super.prototype.visitModuleDeclaration.call(this, node);
    };
    CompletedDocsWalker.prototype.visitPropertyDeclaration = function (node) {
        this.checkNode(node, exports.ARGUMENT_PROPERTIES);
        _super.prototype.visitPropertyDeclaration.call(this, node);
    };
    CompletedDocsWalker.prototype.visitTypeAliasDeclaration = function (node) {
        this.checkNode(node, exports.ARGUMENT_TYPES);
        _super.prototype.visitTypeAliasDeclaration.call(this, node);
    };
    CompletedDocsWalker.prototype.visitVariableDeclaration = function (node) {
        this.checkVariable(node);
        _super.prototype.visitVariableDeclaration.call(this, node);
    };
    CompletedDocsWalker.prototype.checkVariable = function (node) {
        // Only check variables in variable declaration lists
        // and not variables in catch clauses and for loops.
        var list = node.parent;
        if (!tsutils_1.isVariableDeclarationList(list)) {
            return;
        }
        var statement = list.parent;
        if (!tsutils_1.isVariableStatement(statement)) {
            return;
        }
        // Only check variables at the namespace/module-level or file-level
        // and not variables declared inside functions and other things.
        switch (statement.parent.kind) {
            case ts.SyntaxKind.SourceFile:
            case ts.SyntaxKind.ModuleBlock:
                this.checkNode(node, exports.ARGUMENT_VARIABLES, statement);
        }
    };
    CompletedDocsWalker.prototype.checkNode = function (node, nodeType, requirementNode) {
        if (requirementNode === void 0) { requirementNode = node; }
        var name = node.name;
        if (name === undefined) {
            return;
        }
        var requirement = this.requirements.get(nodeType);
        if (requirement === undefined || !requirement.shouldNodeBeDocumented(requirementNode)) {
            return;
        }
        var symbol = this.getTypeChecker().getSymbolAtLocation(name);
        if (symbol === undefined) {
            return;
        }
        var comments = symbol.getDocumentationComment();
        this.checkComments(node, this.describeNode(nodeType), comments, requirementNode);
    };
    CompletedDocsWalker.prototype.describeNode = function (nodeType) {
        return nodeType.replace("-", " ");
    };
    CompletedDocsWalker.prototype.checkComments = function (node, nodeDescriptor, comments, requirementNode) {
        if (comments.map(function (comment) { return comment.text; }).join("").trim() === "") {
            this.addDocumentationFailure(node, nodeDescriptor, requirementNode);
        }
    };
    CompletedDocsWalker.prototype.addDocumentationFailure = function (node, nodeType, requirementNode) {
        var start = node.getStart();
        var width = node.getText().split(/\r|\n/g)[0].length;
        var description = this.describeDocumentationFailure(requirementNode, nodeType);
        this.addFailureAt(start, width, description);
    };
    CompletedDocsWalker.prototype.describeDocumentationFailure = function (node, nodeType) {
        var _this = this;
        var description = Rule.FAILURE_STRING_EXIST;
        if (node.modifiers !== undefined) {
            description += node.modifiers.map(function (modifier) { return _this.describeModifier(modifier.kind); }).join(",") + " ";
        }
        return "" + description + nodeType + ".";
    };
    CompletedDocsWalker.prototype.describeModifier = function (kind) {
        var description = ts.SyntaxKind[kind].toLowerCase().split("keyword")[0];
        var alias = CompletedDocsWalker.modifierAliases[description];
        return alias !== undefined ? alias : description;
    };
    CompletedDocsWalker.modifierAliases = {
        export: "exported",
    };
    return CompletedDocsWalker;
}(Lint.ProgramAwareRuleWalker));
var _a, _b, _c, _d, _e, _f, _g;
