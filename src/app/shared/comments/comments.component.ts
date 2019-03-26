import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ViewEncapsulation,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '@app/core/error-handler.service';
import { CommentsService } from '@app/core/comments/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommentsComponent implements OnInit, OnChanges {
  // @Input() activityId: number;
  // @Input() activityType: string;
  // @Input() issueCommentObject: [IssueComments];
  // @Input() comments: any;
  // @Input() projectId: any;
  // @Output() commentsUpdated = new EventEmitter();
  // @ViewChild(EditableDirective) newCommentEditor: any;

  // options: any = {
  //   lineWrapping: true
  // };
  // comment = '';
  // commentsArray = [Object];
  // commentingOnIssue = false;
  // isLoading = false;

  @Input() activityType: string;
  @Input() activityId: number;
  commentObject: any[] = [];
  user_pic = localStorage.getItem('user_profile_pic');

  constructor(
    private commentService: CommentsService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    // if (this.activityType === 'issue') {
    // } else if (this.activityType === 'idea') {
    //   this.fetchIdeaComments();
    // }
    this.fetchComments();
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes.comments && changes.comments.currentValue === undefined) {
    //   this.comments = [];
    // }
  }

  fetchComments(): void {
    this.commentService.fetchComments(this.activityId, this.activityType).subscribe(
      (data: any) => {
        this.commentObject = data.data.comment;
      },
      (error: any) => {
        this.errorHandler.subj_notification.next(error);
      }
    );
  }

  // addNewComment(projectId: string, issueId: string) {
  //   this.isLoading = true;
  //   this.projectService
  //     .addComment(this.comment, projectId, issueId)
  //     .pipe(
  //       finalize(() => {
  //         this.isLoading = false;
  //         this.commentingOnIssue = false;
  //       })
  //     )
  //     .subscribe(
  //       comment => {
  //         this.isLoading = false;
  //         this.issueCommentObject.push(comment.data.insert_project_issues_comments.returning[0]);
  //       },
  //       error => {
  //         this.isLoading = false;
  //         this.errorHandler.subj_notification.next(error.error.message);
  //       }
  //     );
  // }

  // onCommentEdited(comment: any, content: any) {
  //   const comments = this.comments.slice();
  //   // If the comment was edited with e zero length content, we
  //   // will delete the comment from the list
  //   if (content.length === 0) {
  //     comments.splice(comments.indexOf(comment), 1);
  //   } else {
  //     // Otherwise we're replacing the existing comment
  //     comments.splice(comments.indexOf(comment), 1, {
  //       user: comment.user,
  //       time: comment.time,
  //       content
  //     });
  //   }
  //   // Emit event so the updated comment list can be persisted
  //   // outside the component
  //   this.commentsUpdated.next(comments);
  // }

  // addCommentBox(): void {
  //   this.commentingOnIssue = true;
  //   this.isLoading = false;
  // }

  // cancel(): void {
  //   this.commentingOnIssue = false;
  //   this.isLoading = false;
  // }

  // fetchIdeaComments() {
  //   this.isLoading = true;
  //   this.ideaService.getIdeaComments(this.activityId).subscribe(
  //     (data: any) => {
  //       this.isLoading = false;
  //       this.commentsArray = data.data.ideas[0].ideaCommentsByideaId;
  //     },
  //     (error: any) => {
  //       this.isLoading = false;
  //       this.errorHandler.subj_notification.next(error.error.message);
  //     }
  //   );
  // }
}
