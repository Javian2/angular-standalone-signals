import {
  Component,
  Injector,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent implements OnInit {
  constructor(private injector: Injector) {}

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  notifyCount!: string;

  ngOnInit(): void {
    effect(
      () => {
        this.notifyCount = `Effect notification: count changed to ${this.count()}`;
      },
      { injector: this.injector }
    );
  }

  setCount() {
    this.count.set(3);
  }

  increaseCount() {
    this.count.update(value => value + 1);
  }

  decreaseCount() {
    this.count.update(value => value - 1);
  }
}
