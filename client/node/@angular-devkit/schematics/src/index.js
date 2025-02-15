"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const interface_1 = require("./tree/interface");
const static_1 = require("./tree/static");
var exception_1 = require("./exception/exception");
exports.SchematicsException = exception_1.SchematicsException;
__export(require("./tree/action"));
__export(require("./engine/collection"));
__export(require("./engine/engine"));
__export(require("./exception/exception"));
__export(require("./tree/interface"));
__export(require("./rules/base"));
__export(require("./rules/move"));
__export(require("./rules/random"));
__export(require("./rules/schematic"));
__export(require("./rules/template"));
__export(require("./rules/url"));
__export(require("./tree/delegate"));
__export(require("./tree/empty"));
__export(require("./tree/filesystem"));
__export(require("./tree/memory-host"));
__export(require("./tree/virtual"));
__export(require("./engine/schematic"));
__export(require("./sink/dryrun"));
var filesystem_1 = require("./sink/filesystem");
exports.FileSystemSink = filesystem_1.FileSystemSink;
exports.Tree = {
    empty() { return static_1.empty(); },
    branch(tree) { return static_1.branch(tree); },
    merge(tree, other, strategy = interface_1.MergeStrategy.Default) {
        return static_1.merge(tree, other, strategy);
    },
    partition(tree, predicate) {
        return static_1.partition(tree, predicate);
    },
    optimize(tree) { return static_1.optimize(tree); },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbnNsL1NvdXJjZXMvaGFuc2wvZGV2a2l0LyIsInNvdXJjZXMiOlsicGFja2FnZXMvYW5ndWxhcl9kZXZraXQvc2NoZW1hdGljcy9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxnREFBZ0U7QUFFaEUsMENBQTBFO0FBRzFFLG1EQUE0RDtBQUFuRCwwQ0FBQSxtQkFBbUIsQ0FBQTtBQUU1QixtQ0FBOEI7QUFDOUIseUNBQW9DO0FBQ3BDLHFDQUFnQztBQUVoQywyQ0FBc0M7QUFDdEMsc0NBQWlDO0FBQ2pDLGtDQUE2QjtBQUM3QixrQ0FBNkI7QUFDN0Isb0NBQStCO0FBQy9CLHVDQUFrQztBQUNsQyxzQ0FBaUM7QUFDakMsaUNBQTRCO0FBQzVCLHFDQUFnQztBQUNoQyxrQ0FBNkI7QUFDN0IsdUNBQWtDO0FBQ2xDLHdDQUFtQztBQUNuQyxvQ0FBK0I7QUFFL0Isd0NBQW1DO0FBQ25DLG1DQUE4QjtBQUM5QixnREFBaUQ7QUFBekMsc0NBQUEsY0FBYyxDQUFBO0FBWVQsUUFBQSxJQUFJLEdBQW9CO0lBQ25DLEtBQUssS0FBSyxNQUFNLENBQUMsY0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxJQUFtQixJQUFJLE1BQU0sQ0FBQyxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELEtBQUssQ0FBQyxJQUFtQixFQUNuQixLQUFvQixFQUNwQixXQUEwQix5QkFBYSxDQUFDLE9BQU87UUFDbkQsTUFBTSxDQUFDLGNBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxTQUFTLENBQUMsSUFBbUIsRUFBRSxTQUFpQztRQUM5RCxNQUFNLENBQUMsa0JBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELFFBQVEsQ0FBQyxJQUFtQixJQUFJLE1BQU0sQ0FBQyxpQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN6RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgRmlsZVByZWRpY2F0ZSwgTWVyZ2VTdHJhdGVneSB9IGZyb20gJy4vdHJlZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHtUcmVlIGFzIFRyZWVJbnRlcmZhY2UgfSBmcm9tICcuL3RyZWUvaW50ZXJmYWNlJztcbmltcG9ydCB7IGJyYW5jaCwgZW1wdHksIG1lcmdlLCBvcHRpbWl6ZSwgcGFydGl0aW9uIH0gZnJvbSAnLi90cmVlL3N0YXRpYyc7XG5cblxuZXhwb3J0IHsgU2NoZW1hdGljc0V4Y2VwdGlvbiB9IGZyb20gJy4vZXhjZXB0aW9uL2V4Y2VwdGlvbic7XG5cbmV4cG9ydCAqIGZyb20gJy4vdHJlZS9hY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUvY29sbGVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZS9lbmdpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUvaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXhjZXB0aW9uL2V4Y2VwdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3RyZWUvaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvYmFzZSc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL21vdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9yYW5kb20nO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9zY2hlbWF0aWMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy90ZW1wbGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL3VybCc7XG5leHBvcnQgKiBmcm9tICcuL3RyZWUvZGVsZWdhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi90cmVlL2VtcHR5JztcbmV4cG9ydCAqIGZyb20gJy4vdHJlZS9maWxlc3lzdGVtJztcbmV4cG9ydCAqIGZyb20gJy4vdHJlZS9tZW1vcnktaG9zdCc7XG5leHBvcnQgKiBmcm9tICcuL3RyZWUvdmlydHVhbCc7XG5leHBvcnQge1VwZGF0ZVJlY29yZGVyfSBmcm9tICcuL3RyZWUvaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lL3NjaGVtYXRpYyc7XG5leHBvcnQgKiBmcm9tICcuL3NpbmsvZHJ5cnVuJztcbmV4cG9ydCB7RmlsZVN5c3RlbVNpbmt9IGZyb20gJy4vc2luay9maWxlc3lzdGVtJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVDb25zdHJ1Y3RvciB7XG4gIGVtcHR5KCk6IFRyZWVJbnRlcmZhY2U7XG4gIGJyYW5jaCh0cmVlOiBUcmVlSW50ZXJmYWNlKTogVHJlZUludGVyZmFjZTtcbiAgbWVyZ2UodHJlZTogVHJlZUludGVyZmFjZSwgb3RoZXI6IFRyZWVJbnRlcmZhY2UsIHN0cmF0ZWd5PzogTWVyZ2VTdHJhdGVneSk6IFRyZWVJbnRlcmZhY2U7XG4gIHBhcnRpdGlvbih0cmVlOiBUcmVlSW50ZXJmYWNlLCBwcmVkaWNhdGU6IEZpbGVQcmVkaWNhdGU8Ym9vbGVhbj4pOiBbVHJlZUludGVyZmFjZSwgVHJlZUludGVyZmFjZV07XG4gIG9wdGltaXplKHRyZWU6IFRyZWVJbnRlcmZhY2UpOiBUcmVlSW50ZXJmYWNlO1xufVxuXG5leHBvcnQgdHlwZSBUcmVlID0gVHJlZUludGVyZmFjZTtcbmV4cG9ydCBjb25zdCBUcmVlOiBUcmVlQ29uc3RydWN0b3IgPSB7XG4gIGVtcHR5KCkgeyByZXR1cm4gZW1wdHkoKTsgfSxcbiAgYnJhbmNoKHRyZWU6IFRyZWVJbnRlcmZhY2UpIHsgcmV0dXJuIGJyYW5jaCh0cmVlKTsgfSxcbiAgbWVyZ2UodHJlZTogVHJlZUludGVyZmFjZSxcbiAgICAgICAgb3RoZXI6IFRyZWVJbnRlcmZhY2UsXG4gICAgICAgIHN0cmF0ZWd5OiBNZXJnZVN0cmF0ZWd5ID0gTWVyZ2VTdHJhdGVneS5EZWZhdWx0KSB7XG4gICAgcmV0dXJuIG1lcmdlKHRyZWUsIG90aGVyLCBzdHJhdGVneSk7XG4gIH0sXG4gIHBhcnRpdGlvbih0cmVlOiBUcmVlSW50ZXJmYWNlLCBwcmVkaWNhdGU6IEZpbGVQcmVkaWNhdGU8Ym9vbGVhbj4pIHtcbiAgICByZXR1cm4gcGFydGl0aW9uKHRyZWUsIHByZWRpY2F0ZSk7XG4gIH0sXG4gIG9wdGltaXplKHRyZWU6IFRyZWVJbnRlcmZhY2UpIHsgcmV0dXJuIG9wdGltaXplKHRyZWUpOyB9LFxufTtcbiJdfQ==