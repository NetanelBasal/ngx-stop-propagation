
### ✋ Stop propagation for everyday events with Angular directives 🎩

#### Installation

To install this library, run:

```bash
$ npm install ngx-event-modifiers --save
```
```js
import { StopPropagationModule } from 'ngx-stop-propagation';

@NgModule({
  imports: [
    StopPropagationModule
  ]
})
export class AppModule { }
```

### Usage
- `(click.stop)` - The click event's propagation will be stopped
```html
  <button (click.stop)="onClick($event, extraData)">Click Me!!</button>
```
- `(change.stop)` - The change event's propagation will be stopped
```html
  <input (change.stop)="onChange($event, extraData)">
```
- `(change.mouseover)` - The mouseover event's propagation will be stopped
```html
  <div (change.stop)="onChange($event, extraData)"></div>
```
- `(change.mouseenter)` - The mouseover event's propagation will be stopped
```html
  <div (mouseenter.stop)="onChange($event, extraData)"></div>
```

You can also pass `[eventOptions]`:
```html
  <div (click.stop)="onClick($event, extraData)"
       [eventOptions]="{preventDefault: true}">
     <button>Click Me!!</button>
  </div>
```
## License

MIT © [Netanel Basal](mailto:netanel7799@gmail.com)
