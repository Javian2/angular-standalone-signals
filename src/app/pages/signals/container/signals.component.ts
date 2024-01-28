import {
  Component,
  Injector,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { SignalsService } from '../signals.service';
import { CharactersInfo, Result } from 'src/app/interfaces/characters';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent implements OnInit {
  constructor(private injector: Injector) {}

  //basic
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  notifyCount!: string;

  //api
  signalsService = inject(SignalsService);
  page: WritableSignal<number> = signal(1);
  characters: Result[] = [];
  hasMoreCharacters = true;

  ngOnInit(): void {
    effect(
      () => {
        this.notifyCount = `Effect notification: count changed to ${this.count()}`;
      },
      { injector: this.injector }
    );

    effect(
      () => {
        this.getCharacters();
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

  //---------------- API ----------------

  getCharacters() {
    this.signalsService
      .getCharacters(this.page())
      .subscribe((characters: CharactersInfo) => {
        this.characters = characters.results;
        this.hasMoreCharacters = characters.info.next?.length > 0;
      });
  }

  onChangeCharacters() {
    this.page.update(page => page + 1);
  }
}
