import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalSize } from '../../enum/modal-size.enum';

@Component({
	selector: 'ngkdx-base-modal',
	templateUrl: './base-modal.component.html',
	styleUrls: ['./base-modal.component.scss'],
	standalone: true,
	imports: []
})
export class BaseModalComponent {

	@Input() public id?: string;
	@Input() public isOpen: boolean = false;
	@Input() public title: string;
	@Input() public size = ModalSize.LARGE;

	@Output() public isOpenChange = new EventEmitter<boolean>();

	public closeModal(): void {
		this.isOpenChange.emit(false);
	}
}
