(self.webpackChunkkinderguide_frontend =
  self.webpackChunkkinderguide_frontend || []).push([
  [341],
  {
    './node_modules/@mdx-js/react/index.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          MDXContext() {
            return MDXContext;
          },
          MDXProvider() {
            return MDXProvider;
          },
          useMDXComponents() {
            return useMDXComponents;
          },
          withMDXComponents() {
            return withMDXComponents;
          },
        });
      const react = __webpack_require__('./node_modules/react/index.js');
      const MDXContext = react.createContext({});
      function withMDXComponents(Component) {
        return function boundMDXComponent(props) {
          const allComponents = useMDXComponents(props.components);
          return react.createElement(Component, { ...props, allComponents });
        };
      }
      function useMDXComponents(components) {
        const contextComponents = react.useContext(MDXContext);
        return react.useMemo(
          () =>
            typeof components === 'function'
              ? components(contextComponents)
              : { ...contextComponents, ...components },
          [contextComponents, components]
        );
      }
      const emptyObject = {};
      function MDXProvider({ components, children, disableParentContext }) {
        let allComponents;
        return (
          (allComponents = disableParentContext
            ? typeof components === 'function'
              ? components({})
              : components || emptyObject
            : useMDXComponents(components)),
          react.createElement(
            MDXContext.Provider,
            { value: allComponents },
            children
          )
        );
      }
    },
  },
]);
