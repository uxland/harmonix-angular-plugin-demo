import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import type { PrimariaApi } from '@uxland/primary-shell';
import {
  addItem,
  deleteItem,
  updateItem,
} from '../../activity-history-plugin-integration/activity-history-actions';

@Component({
  selector: 'lib-main-view',
  imports: [],
  template: `
    <div class="container">
      <h1>Angular Harmonix plugin</h1>
      <div class="actions">
        <dss-button
          (click)="addHistoryItem()"
          label="Afegir Element"
          size="md"
          variant="primary"
        ></dss-button>
        <dss-button
          (click)="modifyHistoryItem()"
          label="Modificar Element"
          size="md"
          variant="secondary"
        ></dss-button>
        <dss-button
          (click)="removeHistoryItem()"
          label="Eliminar Element"
          size="md"
          variant="error"
        ></dss-button>
      </div>
      <p>Afegeix, modifica o elimina elements al seguiment clinic.</p>
      <div class="actions">
        <dss-button
          (click)="publicarEvent()"
          label="Publicar event"
          size="md"
          variant="primary"
        ></dss-button>
        <dss-button
          (click)="escoltarEvent()"
          label="Escoltar event"
          size="md"
          variant="secondary"
        ></dss-button>
      </div>
      @if (missatge) {
        <div class="missatge"><strong>Missatge rebut:</strong> {{ missatge }}</div>
      }
      <p>
        Clicka primer en "Escoltar event" i després en "Publicar event" per veure
        com funciona la comunicació mitjançant l'API.
      </p>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 20px;
      }
      .actions {
        display: flex;
        gap: 10px;
      }
      .missatge {
        margin-top: 20px;
        color: green;
      }
    `,
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainViewComponent {
  @Input() api!: PrimariaApi;

  missatge: string | null = null;

  private subscription: any = null;

  async addHistoryItem() {
    try {
      await addItem(this.api);
      this.api.notificationService.success('Element afegit correctament');
      this.deactivate();
    } catch (error) {
      this.api.notificationService.error("Error afegint l'element");
    }
  }

  async modifyHistoryItem() {
    try {
      await updateItem(this.api);
      this.api.notificationService.success('Element modificat correctament');
      this.deactivate();
    } catch (error) {
      this.api.notificationService.error("Error modificant l'element");
    }
  }

  async removeHistoryItem() {
    try {
      await deleteItem(this.api);
      this.api.notificationService.success('Element eliminat correctament');
      this.deactivate();
    } catch (error) {
      this.api.notificationService.error("Error eliminant l'element");
    }
  }

  publicarEvent() {
    this.api.broker.publish('event_angular_demo', {
      missatge: 'Event rebut correctament!',
    });
  }

  escoltarEvent() {
    if (this.subscription) return;
    this.subscription = this.api.broker.subscribe(
      'event_angular_demo',
      (payload: any) => {
        this.missatge = payload?.missatge || 'Missatge buit';
      },
    );
  }

  private deactivate() {
    this.api.regionManager.deactivateView(
      this.api.regionManager.regions.shell.main,
      'plugin-main-view',
    );
  }
}
