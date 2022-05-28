import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GithubCommit } from '../../../../core/types/commit';

@Component({
  selector: 'app-commits-table',
  templateUrl: './commits-table.component.html',
  styleUrls: ['./commits-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommitsTableComponent {
  @Input() commits: GithubCommit[] = [];
  displayedColumns: string[] = ['message', 'author', 'url'];
}
