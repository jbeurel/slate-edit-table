
export default function(plugin, change) {
    const cursorBlock = change.value.document.getDescendant('_cursor_');
    const initial = change.value.change({ save: false }).moveToRangeOf(cursorBlock);
    const toTest = initial.value.change();
    plugin.changes.removeRow(toTest).undo();

    return toTest;
};
