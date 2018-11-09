import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IKnowledge, IUser } from '../interfaces';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class DataSoruceService {

  constructor(private apollo: Apollo) {}

  getUsers(): Observable<IUser[]> {
    const query = 'allUsers';
    return this.apollo.watchQuery({query: gql`
      query ${query} {
        ${query} {
          id
          name
          age
          knowledge {
            language
          }
        }
      }`
    }).valueChanges.pipe(map(d => d.data[query]));
  }

  getUser(id: Number): Observable<IUser> {
    const query = 'user';
    return this.apollo.watchQuery({query: gql`
      query ${query}($id: Int!) {
        ${query}(id: $id) {
          id
          name
          age
          full_name
          city
          tag
          url
          knowledge {
            language
            frameworks
          }
        }
      }`,
      variables: {
        id : id
      }
    }).valueChanges.pipe(map(d => d.data[query]));
  }

  updateUser(id: number, city: string) {
    const mutation = 'updateUserCity';
    return this.apollo.mutate({mutation: gql`
      mutation ${mutation} {
        ${mutation}(userID: "${id}", city: "${city}") {
          id
        }
      }`
    });
  }
}
