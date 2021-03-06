import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GithubRepository } from '../../../../core/types/repository';

@Component({
  selector: 'app-repositories-table',
  templateUrl: './repositories-table.component.html',
  styleUrls: ['./repositories-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoriesTableComponent {
  @Input() repositories: GithubRepository[] = [];
  displayedColumns: string[] = ['full_name', 'owner', 'created_at'];

  constructor(private router: Router) {}

  navigateToCommits(repo: GithubRepository) {
    this.router.navigate(['/commits/', repo.full_name]);
  }
}
