"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const exception_1 = require("../exception/exception");
const interface_1 = require("./interface");
const recorder_1 = require("./recorder");
class CannotCreateFileException extends core_1.BaseException {
    constructor(path) { super(`Cannot create file "${path}".`); }
}
exports.CannotCreateFileException = CannotCreateFileException;
class NullTreeDirEntry {
    constructor(path) {
        this.path = path;
        this.subdirs = [];
        this.subfiles = [];
    }
    get parent() {
        return this.path == '/' ? null : new NullTreeDirEntry(core_1.dirname(this.path));
    }
    dir(name) {
        return new NullTreeDirEntry(core_1.join(this.path, name));
    }
    file(_name) { return null; }
}
exports.NullTreeDirEntry = NullTreeDirEntry;
class NullTree {
    constructor() {
        this.root = new NullTreeDirEntry(core_1.normalize('/'));
    }
    [interface_1.TreeSymbol]() {
        return this;
    }
    branch() {
        return new NullTree();
    }
    merge(_other, _strategy) { }
    // Simple readonly file system operations.
    exists(_path) { return false; }
    read(_path) { return null; }
    get(_path) { return null; }
    getDir(path) { return new NullTreeDirEntry(core_1.normalize('/' + path)); }
    visit() { }
    // Change content of host files.
    beginUpdate(path) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    commitUpdate(record) {
        throw new exception_1.FileDoesNotExistException(record instanceof recorder_1.UpdateRecorderBase
            ? record.path
            : '<unknown>');
    }
    // Change structure of the host.
    copy(path, _to) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    delete(path) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    create(path, _content) {
        throw new CannotCreateFileException(path);
    }
    rename(path, _to) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    overwrite(path, _content) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    apply(_action, _strategy) { }
    get actions() {
        return [];
    }
}
exports.NullTree = NullTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVsbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFuc2wvU291cmNlcy9oYW5zbC9kZXZraXQvIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9zY2hlbWF0aWNzL3NyYy90cmVlL251bGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCwrQ0FPOEI7QUFDOUIsc0RBQW1FO0FBRW5FLDJDQUF3RjtBQUN4Rix5Q0FBZ0Q7QUFHaEQsK0JBQXVDLFNBQVEsb0JBQWE7SUFDMUQsWUFBWSxJQUFZLElBQUksS0FBSyxDQUFDLHVCQUF1QixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN0RTtBQUZELDhEQUVDO0FBR0Q7SUFLRSxZQUE0QixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUU3QixZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUM3QixhQUFRLEdBQW1CLEVBQUUsQ0FBQztJQUhFLENBQUM7SUFKMUMsSUFBSSxNQUFNO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLGdCQUFnQixDQUFDLGNBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBT0QsR0FBRyxDQUFDLElBQWtCO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksQ0FBQyxLQUFtQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0NBQzNDO0FBZEQsNENBY0M7QUFHRDtJQUFBO1FBVVcsU0FBSSxHQUFhLElBQUksZ0JBQWdCLENBQUMsZ0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBd0NqRSxDQUFDO0lBakRDLENBQUMsc0JBQVUsQ0FBQztRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxLQUFLLENBQUMsTUFBWSxFQUFFLFNBQXlCLElBQVMsQ0FBQztJQUl2RCwwQ0FBMEM7SUFDMUMsTUFBTSxDQUFDLEtBQWEsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsS0FBYSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLEdBQUcsQ0FBQyxLQUFhLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkMsTUFBTSxDQUFDLElBQVksSUFBSSxNQUFNLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RSxLQUFLLEtBQUksQ0FBQztJQUVWLGdDQUFnQztJQUNoQyxXQUFXLENBQUMsSUFBWTtRQUN0QixNQUFNLElBQUkscUNBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELFlBQVksQ0FBQyxNQUFzQjtRQUNqQyxNQUFNLElBQUkscUNBQXlCLENBQUMsTUFBTSxZQUFZLDZCQUFrQjtjQUNwRSxNQUFNLENBQUMsSUFBSTtjQUNYLFdBQVcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMsSUFBSSxDQUFDLElBQVksRUFBRSxHQUFXO1FBQzVCLE1BQU0sSUFBSSxxQ0FBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQVk7UUFDakIsTUFBTSxJQUFJLHFDQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBWSxFQUFFLFFBQXlCO1FBQzVDLE1BQU0sSUFBSSx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQVksRUFBRSxHQUFXO1FBQzlCLE1BQU0sSUFBSSxxQ0FBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsU0FBUyxDQUFDLElBQVksRUFBRSxRQUF5QjtRQUMvQyxNQUFNLElBQUkscUNBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFlLEVBQUUsU0FBeUIsSUFBUyxDQUFDO0lBQzFELElBQUksT0FBTztRQUNULE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDO0NBQ0Y7QUFsREQsNEJBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtcbiAgQmFzZUV4Y2VwdGlvbixcbiAgUGF0aCxcbiAgUGF0aEZyYWdtZW50LFxuICBkaXJuYW1lLFxuICBqb2luLFxuICBub3JtYWxpemUsXG59IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7IEZpbGVEb2VzTm90RXhpc3RFeGNlcHRpb24gfSBmcm9tICcuLi9leGNlcHRpb24vZXhjZXB0aW9uJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCB7IERpckVudHJ5LCBNZXJnZVN0cmF0ZWd5LCBUcmVlLCBUcmVlU3ltYm9sLCBVcGRhdGVSZWNvcmRlciB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFVwZGF0ZVJlY29yZGVyQmFzZSB9IGZyb20gJy4vcmVjb3JkZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBDYW5ub3RDcmVhdGVGaWxlRXhjZXB0aW9uIGV4dGVuZHMgQmFzZUV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZykgeyBzdXBlcihgQ2Fubm90IGNyZWF0ZSBmaWxlIFwiJHtwYXRofVwiLmApOyB9XG59XG5cblxuZXhwb3J0IGNsYXNzIE51bGxUcmVlRGlyRW50cnkgaW1wbGVtZW50cyBEaXJFbnRyeSB7XG4gIGdldCBwYXJlbnQoKTogRGlyRW50cnkgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoID09ICcvJyA/IG51bGwgOiBuZXcgTnVsbFRyZWVEaXJFbnRyeShkaXJuYW1lKHRoaXMucGF0aCkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHBhdGg6IFBhdGgpIHt9XG5cbiAgcmVhZG9ubHkgc3ViZGlyczogUGF0aEZyYWdtZW50W10gPSBbXTtcbiAgcmVhZG9ubHkgc3ViZmlsZXM6IFBhdGhGcmFnbWVudFtdID0gW107XG5cbiAgZGlyKG5hbWU6IFBhdGhGcmFnbWVudCk6IERpckVudHJ5IHtcbiAgICByZXR1cm4gbmV3IE51bGxUcmVlRGlyRW50cnkoam9pbih0aGlzLnBhdGgsIG5hbWUpKTtcbiAgfVxuICBmaWxlKF9uYW1lOiBQYXRoRnJhZ21lbnQpIHsgcmV0dXJuIG51bGw7IH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTnVsbFRyZWUgaW1wbGVtZW50cyBUcmVlIHtcbiAgW1RyZWVTeW1ib2xdKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnJhbmNoKCk6IFRyZWUge1xuICAgIHJldHVybiBuZXcgTnVsbFRyZWUoKTtcbiAgfVxuICBtZXJnZShfb3RoZXI6IFRyZWUsIF9zdHJhdGVneT86IE1lcmdlU3RyYXRlZ3kpOiB2b2lkIHt9XG5cbiAgcmVhZG9ubHkgcm9vdDogRGlyRW50cnkgPSBuZXcgTnVsbFRyZWVEaXJFbnRyeShub3JtYWxpemUoJy8nKSk7XG5cbiAgLy8gU2ltcGxlIHJlYWRvbmx5IGZpbGUgc3lzdGVtIG9wZXJhdGlvbnMuXG4gIGV4aXN0cyhfcGF0aDogc3RyaW5nKSB7IHJldHVybiBmYWxzZTsgfVxuICByZWFkKF9wYXRoOiBzdHJpbmcpIHsgcmV0dXJuIG51bGw7IH1cbiAgZ2V0KF9wYXRoOiBzdHJpbmcpIHsgcmV0dXJuIG51bGw7IH1cbiAgZ2V0RGlyKHBhdGg6IHN0cmluZykgeyByZXR1cm4gbmV3IE51bGxUcmVlRGlyRW50cnkobm9ybWFsaXplKCcvJyArIHBhdGgpKTsgfVxuICB2aXNpdCgpIHt9XG5cbiAgLy8gQ2hhbmdlIGNvbnRlbnQgb2YgaG9zdCBmaWxlcy5cbiAgYmVnaW5VcGRhdGUocGF0aDogc3RyaW5nKTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBGaWxlRG9lc05vdEV4aXN0RXhjZXB0aW9uKHBhdGgpO1xuICB9XG4gIGNvbW1pdFVwZGF0ZShyZWNvcmQ6IFVwZGF0ZVJlY29yZGVyKTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBGaWxlRG9lc05vdEV4aXN0RXhjZXB0aW9uKHJlY29yZCBpbnN0YW5jZW9mIFVwZGF0ZVJlY29yZGVyQmFzZVxuICAgICAgPyByZWNvcmQucGF0aFxuICAgICAgOiAnPHVua25vd24+Jyk7XG4gIH1cblxuICAvLyBDaGFuZ2Ugc3RydWN0dXJlIG9mIHRoZSBob3N0LlxuICBjb3B5KHBhdGg6IHN0cmluZywgX3RvOiBzdHJpbmcpOiBuZXZlciB7XG4gICAgdGhyb3cgbmV3IEZpbGVEb2VzTm90RXhpc3RFeGNlcHRpb24ocGF0aCk7XG4gIH1cbiAgZGVsZXRlKHBhdGg6IHN0cmluZyk6IG5ldmVyIHtcbiAgICB0aHJvdyBuZXcgRmlsZURvZXNOb3RFeGlzdEV4Y2VwdGlvbihwYXRoKTtcbiAgfVxuICBjcmVhdGUocGF0aDogc3RyaW5nLCBfY29udGVudDogQnVmZmVyIHwgc3RyaW5nKTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBDYW5ub3RDcmVhdGVGaWxlRXhjZXB0aW9uKHBhdGgpO1xuICB9XG4gIHJlbmFtZShwYXRoOiBzdHJpbmcsIF90bzogc3RyaW5nKTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBGaWxlRG9lc05vdEV4aXN0RXhjZXB0aW9uKHBhdGgpO1xuICB9XG4gIG92ZXJ3cml0ZShwYXRoOiBzdHJpbmcsIF9jb250ZW50OiBCdWZmZXIgfCBzdHJpbmcpOiBuZXZlciB7XG4gICAgdGhyb3cgbmV3IEZpbGVEb2VzTm90RXhpc3RFeGNlcHRpb24ocGF0aCk7XG4gIH1cblxuICBhcHBseShfYWN0aW9uOiBBY3Rpb24sIF9zdHJhdGVneT86IE1lcmdlU3RyYXRlZ3kpOiB2b2lkIHt9XG4gIGdldCBhY3Rpb25zKCk6IEFjdGlvbltdIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cbiJdfQ==