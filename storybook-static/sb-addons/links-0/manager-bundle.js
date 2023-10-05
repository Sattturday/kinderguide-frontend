try {
  const e = 'storybook/links';
  const a = {
    NAVIGATE: `${e}/navigate`,
    REQUEST: `${e}/request`,
    RECEIVE: `${e}/receive`,
  };
  const O = __STORYBOOKAPI__;
  const {
    ActiveTabs: b,
    Consumer: p,
    ManagerContext: k,
    Provider: I,
    addons: n,
    combineParameters: g,
    controlOrMetaKey: v,
    controlOrMetaSymbol: M,
    eventMatchesShortcut: P,
    eventToShortcut: R,
    isMacLike: C,
    isShortcutTaken: D,
    keyToSymbol: f,
    merge: x,
    mockChannel: K,
    optionOrAltSymbol: G,
    shortcutMatchesShortcut: N,
    shortcutToHumanString: V,
    types: Y,
    useAddonState: $,
    useArgTypes: B,
    useArgs: Q,
    useChannel: U,
    useGlobalTypes: q,
    useGlobals: H,
    useParameter: L,
    useSharedState: j,
    useStoryPrepared: w,
    useStorybookApi: z,
    useStorybookState: F,
  } = __STORYBOOKAPI__;
  n.register(e, (t) => {
    t.on(a.REQUEST, ({ kind: u, name: S }) => {
      const c = t.storyId(u, S);
      t.emit(a.RECEIVE, c);
    });
  });
} catch (e) {
  console.error(
    `[Storybook] One of your manager-entries failed: ${import.meta.url}`,
    e
  );
}
